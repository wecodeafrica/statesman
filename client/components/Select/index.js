import { Box, Flex, Icon, Text } from '@chakra-ui/core';
import { useOnClickOutside } from '@components/Utils/useOnClickOutside';
import { motion } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'theme/customIcons';

const MotionBox = motion.custom(Box);

const Select = ({ items, setSelected, selected }) => {
  const [onOpen, setOnOpen] = React.useState(false);
  const ref = React.useRef();

  useOnClickOutside(ref, () => setOnOpen(false));

  const handleClickBtn = () => {
    setOnOpen(!onOpen);
  };

  const onOptionClicked = (value) => () => {
    setSelected(value);
    setOnOpen(false);
  };

  return (
    <Box>
      <Box pos='relative'>
        <Box as='span' d='inline-block' w='100%' rounded='md' shadow='sm'>
          <MotionBox
            as='button'
            type='button'
            aria-haspopup='listbox'
            aria-expanded='true'
            aria-labelledby='listbox-label'
            cursor='default'
            pos='relative'
            w='100%'
            borderWidth={2}
            borderColor='gray.600'
            bg='white'
            pl={3}
            pr={10}
            py={2}
            h={14}
            w={64}
            _hover={{ borderColor: 'brand.light' }}
            _focus={{ borderColor: 'brand.dark', outline: 'none' }}
            textAlign='left'
            onClick={handleClickBtn}
          >
            <Flex align='center' ml={3}>
              <Text
                as='span'
                fontSize='md'
                fontFamily='medium'
                fontWeight={500}
                d='block'
                isTruncated
                color={selected ? 'gray.900' : 'gray.500'}
                ml={3}
              >
                {selected ? selected?.value : 'Select an option'}
              </Text>
            </Flex>
            <Flex
              as='span'
              pos='absolute'
              top={0}
              bottom={0}
              right={0}
              align='center'
              pr={2}
              pointerEvents='none'
              transitionDuration={onOpen && '250ms'}
            >
              <Icon as={onOpen ? ChevronUp : ChevronDown} boxSize={6} />
            </Flex>
          </MotionBox>
        </Box>

        {/* <!-- Select popover, show/hide based on select state. --> */}
        {onOpen && (
          <MotionBox
            ref={ref}
            pos='absolute'
            mt={1}
            w='100%'
            rounded='md'
            bg='white'
            shadow='lg'
            initial={{ y: -10, opacity: 0, transition: { duration: 0.6 } }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10 }}
          >
            <Box
              as='ul'
              tabindex='-1'
              role='listbox'
              aria-labelledby='listbox-label'
              aria-activedescendant='listbox-item-3'
              maxH={64}
              rounded='md'
              fontSize={{ base: 'sm', md: 'md' }}
              lineHeight={{ base: 6, md: 5 }}
              shadow='xs'
              overflow='auto'
              _focus={{ outline: 'none' }}
            >
              {items.map((item) => (
                <Box
                  key={item.id}
                  as='li'
                  id='listbox-item-0'
                  role='option'
                  color={selected?.value === item.value ? 'white' : 'gray.900'}
                  cursor='pointer'
                  userSelect='none'
                  pos='relative'
                  py={3}
                  pl={3}
                  pr={8}
                  bg={selected?.value === item.value && 'brand.light'}
                  _hover={{
                    bg:
                      selected?.value === item.value ? 'brand.dark' : 'gray.50',
                  }}
                  transition='background-color 250ms'
                  value={item}
                  onClick={onOptionClicked(item)}
                >
                  <Flex align='center' ml={3}>
                    <Text
                      as='span'
                      role='radio'
                      fontSize='md'
                      fontFamily='medium'
                      fontWeight={500}
                      d='block'
                      isTruncated
                      ml={3}
                    >
                      {item.value}
                    </Text>
                  </Flex>
                  {selected?.value === item.value && (
                    <Flex
                      as='span'
                      pos='absolute'
                      top={0}
                      bottom={0}
                      right={0}
                      align='center'
                      pr={4}
                    >
                      <Icon as={Check} />
                    </Flex>
                  )}
                </Box>
              ))}
            </Box>
          </MotionBox>
        )}
      </Box>
    </Box>
  );
};

export default Select;
