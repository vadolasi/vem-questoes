import { Client, CombinedError, cacheExchange, fetchExchange } from "urql"
import { authExchange } from "@urql/exchange-auth"
import { graphql } from "./gql"
import Router from "next/router"

const refreshTokenMutation = graphql(/* GraphQL */ `
  mutation RefreshToken {
    refreshToken
  }
`)

function checkError(error: CombinedError, message: string) {
  return error && error.graphQLErrors.some(error => (error as unknown as Error).message === message)
}

export const client = new Client({
  url: "/api/graphql",
  exchanges: [
    cacheExchange,
    authExchange(async utils => {
      return {
        didAuthError: (error) => {
          return checkError(error, "jwt expired")
        },
        addAuthToOperation(operation) {
          return operation
        },
        async refreshAuth() {
          const result = await utils.mutate(refreshTokenMutation, {})

          if (checkError(result.error!, "Refresh token expired")) {
            Router.push("/login")
          }
        }
      }
    }),
    fetchExchange
  ]
})
