import type { AppProps } from "next/app"
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';
import { authExchange } from '@urql/exchange-auth'

import { globalStyles } from "@/styles/global"

globalStyles();

const client = new Client({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [cacheExchange, 
    authExchange(async utils => {
      let token = localStorage.getItem('token');
      let refreshToken = localStorage.getItem('refreshToken');
    
      return {
        addAuthToOperation(operation) {
          if (!token) return operation;
          return utils.appendHeaders(operation, {
            Authorization: `Bearer ${token}`,
          });
        },
        
        async refreshAuth() {
          const result = await utils.mutate(REFRESH, { refreshToken });
    
          if (result.data?.refreshLogin) {
            token = result.data.refreshLogin.token;
            refreshToken = result.data.refreshLogin.refreshToken;
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
          } else {
            localStorage.clear();
            logout();
          }
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
