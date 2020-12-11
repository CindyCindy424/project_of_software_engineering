import { Provider } from 'mobx-react'
import Head from 'next/head'
import '../styles/globals.css'
import userStore from '../src/mobx/stores/AuthStore'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/4.9.2/antd.min.css' />
      </Head>
      <Component {...pageProps} />
      </>)
}

export default MyApp