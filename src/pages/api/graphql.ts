import "reflect-metadata"

import { createYoga } from "graphql-yoga"
import { buildSchema } from "type-graphql"
import { Container } from "typedi"
import { UserResolver } from "../../backend/users/users.resolver"
import { renderGraphiQL } from "@graphql-yoga/render-graphiql"
import { useGraphQlJit } from "@envelop/graphql-jit"
import { authChecker } from "../../backend/auth"
import { printSchema } from "graphql"
import { writeFile } from "fs/promises"
import { GqlContext } from "@/backend/gqlContext"
import { QuestionsResolver } from "@/backend/questions/questions.resolver"
import { NotificationsResolver } from "@/backend/notifications/notifications.resolver"
import { TicketsResolver } from "@/backend/tickets/tickets.resolver"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export const config = {
  api: {
    bodyParser: false
  }
}

const schema = await buildSchema({
  resolvers: [UserResolver, QuestionsResolver, NotificationsResolver, TicketsResolver],
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
    useGraphQlJit()
  ],
  context: ({ req, res }) => ({
    getUserId: async () => {
      const session = await getServerSession(req, res, authOptions)

      if (!session) {
        return null
      }

      return (session.user as any).id
    }
  })
})
