import { Box, ChakraProvider } from '@chakra-ui/core';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';
import { theme } from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ThemeProvider theme={theme}>
        <Box as='main'>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
