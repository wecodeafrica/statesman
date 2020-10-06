import { Container, Grid } from '@chakra-ui/core';
import CountryCard from '@components/Cards/CountryCard';
import Axios from 'axios';

const countries = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        'https://restcountries.eu/rest/v2/region/africa'
      );
      setData(res.data);
    };
    fetchData();
  }, []);

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
