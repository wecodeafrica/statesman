import { Flex, Heading, Image } from '@chakra-ui/core';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const CountryCard = ({ item, mr }) => {
  const duration = 150;
  return (
    <NextLink href={`/country/${item.name}`} passHref>
      <Flex
        mr={item >= item.length ? 0 : mr}
        align='center'
        justify='center'
        rounded='lg'
        w={64}
        h={24}
        bg='white'
        _hover={{ bg: 'brand.light', color: 'white' }}
        shadow='sm'
        p={4}
        cursor='pointer'
        transition={`background-color ${duration}ms ease-in`}
      >
        <Heading as='h5' fontWeight={700} fontSize={{ md: 'lg' }} mr={2}>
          {item.name}
        </Heading>
        <Image w={10} src={item.flag} />
      </Flex>
    </NextLink>
  );
};

CountryCard.propTypes = {
  item: PropTypes.object.isRequired,
  mr: PropTypes.number,
};

export default CountryCard;
