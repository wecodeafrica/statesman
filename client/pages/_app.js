import { Box, ChakraProvider } from '@chakra-ui/core'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'
import '../styles/main.css'
import Header from '@components/Header'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ThemeProvider theme={theme}>
        <Header />
        <Box as='main' bg='gray.50'>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
