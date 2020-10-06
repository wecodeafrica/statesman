import { Box, Container, Grid, Heading, Text } from '@chakra-ui/core';
import PeopleCard from '@components/Cards/PeopleCard';
import Search from '@components/Searchbar';
import { useRouter } from 'next/router';

const Country = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container maxW='xl' py={{ md: 48 }}>
      <Box maxW={120} mx='auto' textAlign='center' mb={12}>
        <Text color='gray.400' fontSize='lg' fontWeight={600}>
          50+ personalities recently added
        </Text>
        <Heading as='h3' fontWeight={900} fontSize='4xl'>
          Search, find Presidents and Head of States in Africa.
        </Heading>
      </Box>

      <Box mt={14} mb={24}>
        <Search />
      </Box>

      <Grid templateColumns={{ md: 'repeat(4, 1fr)' }} gap={4}>
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
  );
};

export default Country;
