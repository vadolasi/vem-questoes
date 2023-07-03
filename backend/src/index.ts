import "reflect-metadata"

import { createYoga } from "graphql-yoga"
import { buildSchema } from "type-graphql"
import { Container } from "typedi"
import { UserResolver } from "./users/users.resolver"
import { renderGraphiQL } from "@graphql-yoga/render-graphiql"
import { useGraphQlJit } from "@envelop/graphql-jit"
import * as jwt from "jsonwebtoken"
import { authChecker } from "./auth"
import { AuthResolver } from "./auth/auth.resolver"
import { ExecutionArgs, execute, subscribe } from "graphql"
import { GqlContext } from "./gqlContext"
import { QuestionsResolver } from "./questions/questions.resolver"
import { NotificationsResolver } from "./notifications/notifications.resolver"
import { TicketsResolver } from "./tickets/tickets.resolver"
import { useResponseCache } from "@graphql-yoga/plugin-response-cache"
import { App } from "uWebSockets.js"
import { makeBehavior } from "graphql-ws/lib/use/uWebSockets"
import cookie from "cookie"

const schema = await buildSchema({
  resolvers: [UserResolver, AuthResolver, QuestionsResolver, NotificationsResolver, TicketsResolver],
  container: Container,
  authChecker,
  validate: { forbidUnknownValues: false }
})

const yoga = createYoga<GqlContext>({
  schema,
  graphqlEndpoint: "/graphql",
  renderGraphiQL,
  plugins: [
    useGraphQlJit(),
    useResponseCache({
      session: (request) => request.headers.get("Cookie")
    })
  ],
  context: ({ req, res }) => ({
    getUserId: () => {
      const token = cookie.parse(req.getHeader("Cookie"))["token"] || null

      if (!token) {
        return null
      }

      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }

      if (!verifiedToken) {
        return null
      }

      return verifiedToken.userId
    },
    setToken: (token: string) => {
      res.setHeader("Set-Cookie", cookie.serialize("token", token, { path: "/", httpOnly: true, sameSite: "strict" }))
    },
    setRefreshToken: (token: string) => {
      res.setHeader("Set-Cookie", cookie.serialize("refreshToken", token, { path: "/", httpOnly: true, sameSite: "strict" }))
    },
    setTokens(token: string, refreshToken: string) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, { path: "/", httpOnly: true, sameSite: "strict" }),
        cookie.serialize("refreshToken", token, { path: "/", httpOnly: true, sameSite: "strict" })
      )
    },
    getRefreshToken: () => {
      return cookie.parse(req.getHeader("Cookie"))["refreshToken"] || null
    }
  }),
  graphiql: {
    subscriptionsProtocol: "WS"
  }
})

type EnvelopedExecutionArgs = ExecutionArgs & {
  rootValue: {
    execute: typeof execute
    subscribe: typeof subscribe
  }
}

const wsHandler = makeBehavior({
  execute: (args) => (args as EnvelopedExecutionArgs).rootValue.execute(args),
  subscribe: (args) =>
    (args as EnvelopedExecutionArgs).rootValue.subscribe(args),
  onSubscribe: async (ctx, msg) => {
    const { schema, execute, subscribe, contextFactory, parse, validate } = yoga.getEnveloped(ctx)

    const args: EnvelopedExecutionArgs = {
      schema,
      operationName: msg.payload.operationName,
      document: parse(msg.payload.query),
      variableValues: msg.payload.variables,
      contextValue: await contextFactory(),
      rootValue: {
        execute,
        subscribe
      }
    }

    const errors = validate(args.schema, args.document)
    if (errors.length) return errors
    return args
  }
})

App()
  .any("/*", yoga)
  .ws(yoga.graphqlEndpoint, wsHandler)
  .listen(4000, () => {
    console.log("running on http://localhost:4000")
  })
