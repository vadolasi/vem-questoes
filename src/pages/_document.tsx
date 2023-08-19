import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";


export default function Document() {
  return (
    <Html lang="pt-br" className="min-h-screen w-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon.png" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body className="min-h-screen w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
