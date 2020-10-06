import { Flex, Input } from '@chakra-ui/core';
import Select from '@components/Select';

const items = [
  { id: 1, value: 'Head of States' },
  { id: 2, value: 'Country' },
];

const Search = () => {
  const [selected, setSelected] = React.useState(null);

  return (
    <form>
      <Flex>
        <Select items={items} selected={selected} setSelected={setSelected} />

        <Input
          placeholder='search for head of state in africa'
          h={14}
          w='100%'
          borderWidth={2}
          borderColor='gray.600'
          _hover={{ borderColor: 'brand.light' }}
          _focus={{ borderColor: 'brand.dark' }}
          rounded='none'
        />
      </Flex>
    </form>
  );
};

export default Search;
