import type { AppProps } from "next/app"
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import { authExchange } from '@urql/exchange-auth'

import { globalStyles } from "@/styles/global"
import { graphql } from "../gql";

globalStyles();

const refreshTokenMutation = graphql(/* GraphQL */ `
  mutation RefreshToken() {
    refreshToken
  }
`);

const client = new Client({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [cacheExchange,
    authExchange(async utils => {
      return {
        didAuthError: (error) => {
          return error.graphQLErrors.some(
            e => e.extensions?.code === 'FORBIDDEN',
          )
        },
        addAuthToOperation(operation) {
          return operation
        },
        async refreshAuth() {
          await utils.mutate(refreshTokenMutation, {});
        },
      };
    }),
  fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}
