import React from 'react'
import { Paragraph } from '@components/Typography'
import { Flex, Avatar, Box, Badge, Text } from '@chakra-ui/core'


export const SmallCard = () => (
    <Flex borderRadius="10px" border="1px solid #eee" width={["100%", "max-content"]} mb={2} px={4} py={2}>
        <Avatar src="https://bit.ly/sage-adebayo" />
        <Box ml="3">
            <Paragraph fontWeight="bold">
                Segun Adebayo
      <Badge ml="1" colorScheme="green">Nigeria</Badge>
            </Paragraph>
            <Text>President</Text>
        </Box>
    </Flex>
)