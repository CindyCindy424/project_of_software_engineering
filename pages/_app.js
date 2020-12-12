import { Provider } from 'mobx-react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <div>
      <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/4.9.2/antd.min.css' />
      </Head>
  
      <Component {...pageProps} />
      </div>)
}

export default MyApp