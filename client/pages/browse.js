import { Box, Container, Grid, Heading, Text } from '@chakra-ui/core'
import PeopleCard from '@components/Cards/PeopleCard'

const Browse = () => {
  return (
    <Box py={48}>
      <Container maxW='xl' overflow='hidden'>
        <Box w={120} mx='auto' textAlign='center'>
          <Heading
            as='h2'
            fontWeight={900}
            fontSize={{ md: '4xl' }}
            textAlign='center'
          >
            Find an African President or Head of State
          </Heading>
          <Text fontSize={{ md: 'xl' }} color='gray.700' mt={4}>
            There are 400+ Presidents/Heads of States that you can search and
            learn more about.
          </Text>
        </Box>

        <Grid templateColumns={{ md: 'repeat(4, 1fr)' }} gap={{ md: 2 }}>
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </Grid>
      </Container>
    </Box>
  )
}

export default Browse
