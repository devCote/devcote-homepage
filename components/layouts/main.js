import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {

  return (
    <Box as="main" pb={12}  >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bakhanenko Dmitriy Website</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={4} >
        {children}
      </Container>
    </Box>
  )
}

export default Main
