import Head from 'next/head'
import Navbar from '../navbar.js'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import VoxelDogLoader from '../artemis-loader.js'

const LazyArtemis = dynamic(() => import('../artemis'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
  })

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Marc Morado - Homepage</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
      <LazyArtemis />
        {children}
      </Container>
    </Box>
  )
}

export default Main
