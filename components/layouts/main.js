import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelCatLoader from '../voxel-cat-loader'
import dynamic from 'next/dynamic'

const LazyVoxelCat = dynamic(() => import('../voxelcat'), {
  ssr: false,
  loading: () => <VoxelCatLoader />
})

const Main = ({ children, router }) => {

  return (
    <Box as="main" pb={12}  >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bakhanenko Dmitriy Website</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14} >
        <LazyVoxelCat />
        {children}
      </Container>
    </Box>
  )
}

export default Main
