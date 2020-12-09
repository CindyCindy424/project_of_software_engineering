import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Head>
    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css' />
    <Component {...pageProps} />
  </Head>)
}

export default MyApp
