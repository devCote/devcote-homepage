import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../components/../lib/theme'
import Fonts from '../components/fonts'
import '@fontsource/mr-de-haviland/400.css'
import { LangProvider } from '../lib/langContext'

const Website = ({ Component, pageProps, router }) => {

  return (
    <LangProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </LangProvider>
  )
}

export default Website
