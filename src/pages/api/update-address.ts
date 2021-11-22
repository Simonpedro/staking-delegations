import addressSchema from "lib/addressSchema"
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

  const body = JSON.parse(req.body)
  const address = await addressSchema.validate(body.address)

  console.debug("session.user", session.user)

  const user = await prisma.user.update({
    data: {
      address,
    },
    where: {
      email: session.user.email
    },
    select: {
      id: true,
      email: true,
      name: true,
      address: true
    }
  })

  res.status(200).json(user)
}