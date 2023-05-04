import "reflect-metadata"

import { createYoga } from "graphql-yoga"
import type { NextApiRequest, NextApiResponse } from "next"
import { buildSchema } from "type-graphql"
import { Container } from "typedi"
import { UserResolver } from "../../backend/users/users.resolver"
import { renderGraphiQL } from "@graphql-yoga/render-graphiql"
import { useGraphQlJit } from "@envelop/graphql-jit"
import jwt from "jsonwebtoken"
import { authChecker } from "../../backend/auth"
import { AuthResolver } from "@/backend/auth/auth.resolver"

export const config = {
  api: {
    bodyParser: false
  }
}

const schema = await buildSchema({
  resolvers: [UserResolver, AuthResolver],
  container: Container,
  authChecker
})

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema,
  graphqlEndpoint: "/api/graphql",
  renderGraphiQL,
  plugins: [useGraphQlJit()],
  context: ({ req }) => ({
    getUserId: () => {
      const token = req.cookies.token

      if (!token) {
        return null
      }

      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET!) as { sub: string }

      if (!verifiedToken) {
        return null
      }

      return verifiedToken.sub
    }
  })
})
