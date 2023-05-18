import type { AppProps } from "next/app"
import { Client, Provider, fetchExchange } from 'urql';
import { authExchange } from '@urql/exchange-auth'

import { globalStyles } from "@/styles/global"
import { graphql } from "../gql";

import { cacheExchange } from '@urql/exchange-graphcache';

globalStyles();

const refreshTokenMutation = graphql(/* GraphQL */ `
  mutation RefreshToken {
    refreshToken
  }
`);

const client = new Client({
  url: '/api/graphql',
  exchanges: [
    cacheExchange({}),
    authExchange(async utils => {
      return {
        didAuthError: (error) => {
          return true
        },
        addAuthToOperation(operation) {
          return operation
        },
        async refreshAuth() {
          await utils.mutate(refreshTokenMutation, {});
        },
      };
    }),
    fetchExchange
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}
