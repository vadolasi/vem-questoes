import type { AppProps } from "next/app"
import Head from "next/head"
import { Provider } from "urql"
import { globalStyles } from "@/styles/global"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { client } from "@/client"
import { useEffect } from "react"
import Script from "next/script"
import { Tooltip } from "react-tooltip"
import "react-tooltip/dist/react-tooltip.css"
import "../styles/index.css"
import { Modals } from "@/components/Modal"
import { SessionProvider } from "next-auth/react"

globalStyles();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    window.OneSignal = window.OneSignal || []
    // @ts-ignore
    OneSignal.push(function () {
      // @ts-ignore
      OneSignal.init({
        appId: "2eb6e277-8098-432b-a71b-51d13fd281d4",
        safari_web_id: "web.onesignal.auto.58b504fd-a471-4836-bd65-020899577e4e",
        notifyButton: {
          enable: true
        },
        allowLocalhostAsSecureOrigin: true
      })
    })

    return () => {
      // @ts-ignore
      window.OneSignal = undefined
    }
  }, [])

  return (
    <SessionProvider session={session}>
      <Provider value={client}>
        <Head>
          <title>Vem Questões</title>
          <Script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async={true} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <ToastContainer style={{ zIndex: 200000 }} />
        <Tooltip id="tooltip" />
        <Component {...pageProps} />
        <Modals />
      </Provider>
    </SessionProvider>
  )
}
