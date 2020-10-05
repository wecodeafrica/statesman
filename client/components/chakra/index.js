/**
 * Here we extend all external components in the codebase and avoid importing them
 * directly within other views or pages apart from internal components, this also give us control over variables like 
 * Theming, Dark Mode etc
 */

import { Flex, Input, Box } from '@chakra-ui/core'


/**
 * @name BoxWrapper
 * @description Wrapper around Chakra UI Box Component
 */
export const BoxWrapper = (props) => <Box {...props} />

/**
 * @name FlexWrapper
 * @description Wrapper around Chakra UI Flex Component
 */
export const FlexWrapper = (props) => <Flex {...props} />

/**
 * @name InputWrapper
 * @description Wrapper around Chakra UI Input Component
 */
export const InputWrapper = (props) => <Input {...props} />
