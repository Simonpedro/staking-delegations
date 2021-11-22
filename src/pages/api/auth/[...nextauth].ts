import { compare } from "bcrypt"
import prisma from "lib/prisma"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  pages: {
    "signIn": "/login"
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials, _req) => {
        if (!credentials?.email || !credentials.password) return null

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          select: { id: true, email: true, name: true, password: true }
        })

        if (!user) {
          /**
           * User is not registered, it would be good to tell the user that, so it can register.
           * (Some people has some security concerns, but I think the UX does worth it)
           */
          return null
        }

        const passwordValid = await compare(credentials.password, user.password)

        if (!passwordValid) {
          return null
        }

        console.debug("Authorize user ID", user.id.toString())

        return {
          email: user.email,
          name: user.name,
        }
      }
    })
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days,
    updateAge: 24 * 60 * 60, // 24 hours
  }
})


declare module "next-auth" {
  interface Session {
    user: {
      name: string
      email: string
    }
  }
}