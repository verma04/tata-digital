import '../styles/globals.css'
import '../styles/reset.css'
import type { AppProps } from 'next/app'
import 'rc-swipeout/assets/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import  Head  from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>

      <Head>

      <Head>
        <object data="image.svg" type="image/svg+xml"></object>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap" rel="stylesheet"/>
        </Head>
      </Head>

      
  
  <Component {...pageProps} />

</ChakraProvider>
)

}

export default MyApp
