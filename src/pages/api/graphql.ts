import "reflect-metadata"

import { createYoga } from "graphql-yoga"
import { buildSchema } from "type-graphql"
import { Container } from "typedi"
import { UserResolver } from "../../backend/users/users.resolver"
import { renderGraphiQL } from "@graphql-yoga/render-graphiql"
import { useGraphQlJit } from "@envelop/graphql-jit"
import jwt, { TokenExpiredError } from "jsonwebtoken"
import { authChecker } from "../../backend/auth"
import { AuthResolver } from "@/backend/auth/auth.resolver"
import { GraphQLError, printSchema } from "graphql"
import { writeFile } from "fs/promises"
import { GqlContext } from "@/backend/gqlContext"
import { QuestionsResolver } from "@/backend/questions/questions.resolver"
import { NotificationsResolver } from "@/backend/notifications/notifications.resolver"
import { TicketsResolver } from "@/backend/tickets/tickets.resolver"
import { useResponseCache } from "@graphql-yoga/plugin-response-cache"
import cookie from "cookie"

export const config = {
  api: {
    bodyParser: false
  }
}

const schema = await buildSchema({
  resolvers: [UserResolver, AuthResolver, QuestionsResolver, NotificationsResolver, TicketsResolver],
  container: Container,
  authChecker,
  validate: { forbidUnknownValues: false }
})

if (process.env.NODE_ENV !== "production") {
  await writeFile("./src/backend/schema.graphql", printSchema(schema))
}

export default createYoga<GqlContext>({
  schema,
  graphqlEndpoint: "/api/graphql",
  renderGraphiQL,
  plugins: [
    useGraphQlJit(),
    /*
    useResponseCache({
      session: (request) => request.headers.get("Cookie")
    })
    */
  ],
  context: ({ req, res }) => ({
    getUserId: () => {
      const token = req.cookies.token

      if (!token) {
        return null
      }

      let verifiedToken: { userId: string } | null = null

      try {
        verifiedToken = (jwt.verify(token, process.env.JWT_SECRET!) as { userId: string })
      } catch (TokenExpiredError) {
        throw new GraphQLError("jwt expired")
      }

      if (!verifiedToken) {
        return null
      }

      return verifiedToken.userId
    },
    setToken: (token: string) => {
      res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly; SameSite=Strict`)
    },
    setRefreshToken: (token: string) => {
      res.setHeader("Set-Cookie", `refreshToken=${token}; Path=/; HttpOnly; SameSite=Strict`)
    },
    setTokens(token: string, refreshToken: string) {
      res.setHeader("Set-Cookie", [`token=${token}; Path=/; HttpOnly; SameSite=Strict`, `refreshToken=${refreshToken}; Path=/; HttpOnly; SameSite=Strict`])
    },
    getRefreshToken: () => {
      return req.cookies.refreshToken
    }
  })
})
