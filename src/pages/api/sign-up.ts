import { encrypt } from 'lib/password'
import prisma from 'lib/prisma'
import signUpValidationSchema from 'lib/signUpValidationSchema'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  const body = JSON.parse(req.body)
  const data = await signUpValidationSchema.validate(body)

  if (await prisma.user.findUnique({ where: { email: data.email } })) {
    res.status(409).send(null)
    return
  }

  await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: await encrypt(data.password)
    }
  })

  res.status(200).send(null)
}
