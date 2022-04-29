import 'public/css/style.css'
import {state} from "state";
import {useSnapshot} from "valtio";
import Contract from 'helpers/Contract'
import {useEffect} from "react";
import TronLink from "helpers/TronLink";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const snap = useSnapshot(state);

  useEffect(async () => {
    if (snap.login) {
      try {
        await Contract.init(window.tronWeb).then(r => {
          if (r) state.contract = true
        });
      } catch (error) {
        state.timer = false
      }
    }
  }, [snap.login])

  useEffect(() => {
    if (snap.timer) {
      const interval = setInterval(async () => {
        await TronLink();
      }, 2000);
      return () => clearInterval(interval);
    }
  });

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/pic/favicon/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/pic/favicon/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/pic/favicon/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/pic/favicon/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/pic/favicon/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/pic/favicon/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/pic/favicon/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/pic/favicon/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/pic/favicon/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/pic/favicon/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/pic/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/pic/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/pic/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/pic/favicon/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/pic/favicon/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#22223F"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
