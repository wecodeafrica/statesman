import { Container, Flex, Heading, Link, Text } from '@chakra-ui/core'
import NextLink from 'next/link'

const Header = () => {
  return (
    <Flex
      as='header'
      w='100%'
      pos='fixed'
      align='center'
      top={0}
      bg='white'
      boxShadow='sm'
      h={20}
      zIndex={100}
    >
      <Container maxW='xl'>
        <Flex align='center' justify='space-between'>
          <NextLink href='/' passHref>
            <Link _hover={{ textDecor: 'none' }}>
              <Heading
                as='h3'
                fontSize={{ md: '3xl' }}
                fontWeight={900}
                color='gray.700'
                _hover={{ color: 'brand.dark' }}
              >
                Stateman
              </Heading>
            </Link>
          </NextLink>

          <Flex align='center' justify='space-between'>
            <NextLink href='/browse' passHref>
              <Link _hover={{ textDecor: 'none' }} mr={10}>
                <Text
                  fontWeight={700}
                  fontSize='md'
                  color='gray.700'
                  _hover={{ color: 'brand.dark' }}
                >
                  Browse
                </Text>
              </Link>
            </NextLink>

            <NextLink href='/countries' passHref>
              <Link _hover={{ textDecor: 'none' }} mr={10}>
                <Text
                  fontWeight={700}
                  fontSize='md'
                  color='gray.700'
                  _hover={{ color: 'brand.dark' }}
                >
                  Countries
                </Text>
              </Link>
            </NextLink>

            <NextLink href='/head' passHref>
              <Link _hover={{ textDecor: 'none' }} mr={10}>
                <Text
                  fontWeight={700}
                  fontSize='md'
                  color='gray.700'
                  _hover={{ color: 'brand.dark' }}
                >
                  Head of States
                </Text>
              </Link>
            </NextLink>

            <NextLink href='/why' passHref>
              <Link _hover={{ textDecor: 'none' }}>
                <Text
                  fontWeight={700}
                  fontSize='md'
                  color='gray.700'
                  _hover={{ color: 'brand.dark' }}
                >
                  What is Statesman?
                </Text>
              </Link>
            </NextLink>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default Header
