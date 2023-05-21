import type { AppProps } from "next/app"
import Head from "next/head";
import { Provider } from 'urql';

import { globalStyles } from "@/styles/global"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { client } from "@/client";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Head>
      <title>Vem Questões</title>
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  )
}
