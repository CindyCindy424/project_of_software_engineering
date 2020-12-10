import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/4.9.2/antd.min.css' />
      </Head>
      <Component {...pageProps} /></>)
}

export default MyApp
