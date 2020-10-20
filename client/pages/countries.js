import { Container, Grid } from '@chakra-ui/core';
import CountryCard from '@components/Cards/CountryCard';
import { resources } from 'utils/resources';

const countries = () => {
  const { data } = resources();

  return (
    <Container maxW='xl' py={{ md: 48 }}>
      <Grid templateColumns={{ md: 'repeat(4, 1fr)' }} gap={4}>
        {data.map((item) => (
          <CountryCard item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default countries;
