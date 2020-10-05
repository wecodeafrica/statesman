import React from 'react'
import Header from '@components/Header'
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Input,
  Text
} from '@chakra-ui/core'
import PeopleCard from '@components/Cards/PeopleCard'
import RoundedIcon from '@components/Utils/RoundedIcon'
import { ArrowLeft, ArrowRight } from 'theme/customIcons'

export default function Home () {
  return (
    <React.Fragment>
      <Header />

      <Container maxW='xl' py={32} overflowX='hidden'>
        <form>
          <Box my={14}>
            <Input
              placeholder='search for head of state in africa'
              h={14}
              borderColor='gray.600'
              _hover={{ borderColor: 'brand.light' }}
              _focus={{ borderColor: 'brand.dark' }}
            />
          </Box>
        </form>

        <Box maxW={120} mx='auto' textAlign='center' mb={12}>
          <Text color='gray.400' fontSize='lg' fontWeight={600}>
            50+ personalities recently added
          </Text>
          <Heading as='h3' fontWeight={900} fontSize='4xl'>
            Search, find Presidents and Head of States in Africa.
          </Heading>
        </Box>

        <Flex w='100%' align='center' pos='relative'>
          <RoundedIcon
            left={-4}
            icon={ArrowLeft}
            bg='white'
            _hover={{ bg: 'brand.dark', color: 'white' }}
            transition='250ms'
            shadow='md'
            shadowColor='rgba(0,0,0,.4)'
            zIndex={10}
          />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <RoundedIcon
            right={0}
            icon={ArrowRight}
            bg='white'
            _hover={{ bg: 'brand.dark', color: 'white' }}
            transition='250ms'
            shadow='md'
            shadowColor='rgba(0,0,0,.4)'
            zIndex={10}
          />
        </Flex>

        <Flex align='center' justify='center' mt={10}>
          <Button colorScheme='orange' w={80} h={12}>
            explore more people
          </Button>
        </Flex>

        <Divider my={20} />

        <Box color='gray.600' fontSize='md'>
          <Heading as='h3' fontSize={{ md: '3xl' }} mb={4}>
            Why Statesman
          </Heading>
          <Text>
            Information in a democratic government should be open, inclusive and
            truthful{' '}
          </Text>
          <Text>
            Political Manifestos are the foundations of any political campaign ,
            most political candidates use this to set out a vision for what
            results their period in office will yield While most manifestos for
            smaller candidates stay internal, some are heavily distributed for
            top states positions Here are statesman, we want to maintain a
            publicly aggregated API of{' '}
            <strong>Publicly Elected Officials</strong>
            Their History, Backgrounds and Origins, years spent in service and
            achievements as they correlate to their Manifesto It's safe to say
            that we want to keep them accountable to the <strong>
              KPIs
            </strong>{' '}
            They've set for themselves before being elected into Office. <br />
            Contributing to this archive is easy if you have a Github account,
            Our goal is that the API grows to be a verifiable data source for
            future references, predictions, data scientists, educators etc who
            would find these aggregated data to be useful.
          </Text>
        </Box>
      </Container>
    </React.Fragment>
  )
}
