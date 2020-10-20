import { Box, Flex, Icon } from '@chakra-ui/core'
import PropTypes from 'prop-types'

const RoundedIcon = ({ icon, rotate, ...rest }) => {
  return (
    <Flex
      align='center'
      justify='center'
      pos='absolute'
      rounded='100%'
      cursor='pointer'
      w={14}
      h={14}
      {...rest}
    >
      <Box transform={rotate}>
        <Icon as={icon} boxSize={4} />
      </Box>
    </Flex>
  )
}

RoundedIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  rotate: PropTypes.string
}

export default RoundedIcon
