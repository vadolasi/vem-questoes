import { Client, fetchExchange } from 'urql';
import { authExchange } from '@urql/exchange-auth'

import { graphql } from "./gql";

import { cacheExchange } from '@urql/exchange-graphcache';

const refreshTokenMutation = graphql(/* GraphQL */ `
  mutation RefreshToken {
    refreshToken
  }
`);

export const client = new Client({
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
