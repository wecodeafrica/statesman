import { extendTheme } from '@chakra-ui/core';

const breakpoints = ['30em', '48em', '62em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontSize: 'sm',
        fontFamily: '"Inter", sans-serif',
        color: props.colorMode === 'dark' ? '#E2E8F0' : 'gray.800',
        bg: props.colorMode === 'dark' ? '#1A202C' : 'white',
        lineHeight: 'tall',
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
      },
    }),
  },
  ...breakpoints,
  fonts: {
    heading: '"Inter", sans-serif',
    bold: '"Inter", sans-serif',
    medium: '"Inter", sans-serif',
    light: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  fontSizes: {
    xx: '.55rem',
    tiny: '.68rem',
    '7xl': '5rem',
    '8xl': '6rem',
  },
  space: {
    14: '3.5rem',
    60: '15rem',
    70: '18rem',
    80: '20rem',
    85: '23rem',
    87: '24rem',
    90: '25rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    123: '40rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    140: '70rem',
    145: '76rem',
  },
  sizes: {
    14: '3.5rem',
    60: '15rem',
    70: '18rem',
    80: '20rem',
    85: '23rem',
    87: '24rem',
    90: '25rem',
    108: '27rem',
    110: '30rem',
    115: '32rem',
    120: '35rem',
    123: '40rem',
    125: '45rem',
    127: '48rem',
    130: '55rem',
    135: '60rem',
    140: '70rem',
    145: '76rem',
  },
});
