import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "./prisma"
import bcrypt from "bcryptjs"
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials!

        const user = await prisma.user.findUnique({
          where: { email }
        })

        if (!user) {
          return null
        }

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          photoUrl: user.photoUrl,
          role: user.role,
          totalCorrect: user.totalCorrect,
          totalQuestions: user.totalQuestions,
          isAdmin: user.role !== "USER"
        }
      }
    })
  ],
  secret: process.env.JWT_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login"
  },
  callbacks: {
    jwt: async ({ token, user: aUser }) => {
      const user = aUser as any
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.photoUrl = user.photoUrl
        token.role = user.role
        token.totalCorrect = user.totalCorrect
        token.totalQuestions = user.totalQuestions
        token.isAdmin = user.role !== "USER"
      }

      return token
    },
    session: async ({ session, token }) => {
      session.user = token
      return session
    }
  }
}
