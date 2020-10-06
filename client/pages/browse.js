import {
  Box,
  Container,
  Flex,
  FormControl,
  Grid,
  Heading,
  Input,
  Text,
} from '@chakra-ui/core';
import PeopleCard from '@components/Cards/PeopleCard';
import Search from '@components/Searchbar';
import Select from '@components/Select';

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

        <Box
          rounded='lg'
          bg='white'
          w='100%'
          shadow='md'
          p={{ md: 6 }}
          my={{ md: 20 }}
        >
          <Search />
        </Box>

        <Grid templateColumns={{ md: 'repeat(4, 1fr)' }} gap={{ md: 4 }}>
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
          <PeopleCard width={75} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Browse;
