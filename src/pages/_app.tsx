import type { AppProps } from "next/app"
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

import { globalStyles } from "@/styles/global"

globalStyles();

const client = new Client({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}
