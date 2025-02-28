import { Client, cacheExchange, fetchExchange } from "urql"

export const client = new Client({
  url: "/api/graphql",
  exchanges: [
    cacheExchange,
    fetchExchange
  ]
})
