import prisma from "lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const session = await getSession({ req })

  if (!session?.user) {
    res.status(401).send(null)
    return
  }

  const body = JSON.parse(req.body) as Record<string, string>

  console.debug("session.user", session.user)

  const user = await prisma.user.findUnique({ where: { email: session.user.email } })

  if (!user) {
    res.status(401).send(null)
    return
  }

  await Promise.all(
    Object
      .entries(body)
      .map(([network, value]) => (
        prisma.address.upsert({
          where: {
            network,
          },
          create: {
            network,
            value,
            User: {
              connect: {
                id: user.id
              },
            }
          },
          update: {
            userId: user.id,
            network,
            value
          }
        }))
      )
  )

  res.status(200).json(user)
}