import { Client, fetchExchange } from 'urql';
import { authExchange } from '@urql/exchange-auth'

import { graphql } from "./gql";

// import { offlineExchange } from '@urql/exchange-graphcache';
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage';

const refreshTokenMutation = graphql(/* GraphQL */ `
  mutation RefreshToken {
    refreshToken
  }
`);

/*
export const storage = makeDefaultStorage({
  idbName: 'graphcache-v3',
  maxAge: 7
})

const cache = offlineExchange({ storage })
*/

export const client = new Client({
  url: '/api/graphql',
  exchanges: [
    // cache,
    authExchange(async utils => {
      return {
        didAuthError: (error) => {
          return true
        },
        addAuthToOperation(operation) {
          return operation
        },
        async refreshAuth() {
          const result = await utils.mutate(refreshTokenMutation, {});
          result.error?.message
        },
      };
    }),
    fetchExchange
  ],
});
