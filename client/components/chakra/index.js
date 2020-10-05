/**
 * Here we extend all external components in the codebase and avoid importing them
 * directly within other components or pages, this also give us control over variables like 
 * Theming, Dark Mode etc
 */

import { Flex, Box } from '@chakra-ui/core'


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