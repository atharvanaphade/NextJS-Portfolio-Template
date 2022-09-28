import React from "react";
import { Flex, Link, Stack, Heading, Text, useColorModeValue, Badge } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ExpFeature = ({ name, years, position, type, place, href, children }) => {
  const [opacity, setOpacity] = React.useState(0);  
  
    return (
      <Link
        href={href}
        title={name}
        target='_blank'
        rel='noopener noreferrer'
        _hover={{
          textDecoration: 'none',
        }}
        _focus={{
          outline: 'none',
        }}
        onMouseOver={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}>
      <Flex
        align='center'
        bg={useColorModeValue('gray.100', 'gray.900')}
        rounded={'lg'}
        p={6}
        mb={10}>
        <Stack>
          <Flex
            justifyContent='space-between'
            flexDirection={['column', 'row', 'row']}>
            <Flex flexDirection='column'>
              <Heading size='md' fontWeight='bold'>
                {position}
              </Heading>
              <ExternalLinkIcon opacity={opacity} fontSize='2xl' />
              <Text>
                {name}, {place}
              </Text>
            </Flex>
            <Flex flexDirection='column'>
              <Text fontStyle='italic' color='gray.600' fontSize='14px'>
                {years}
              </Text>
              <Flex justifyContent={['flex-start', 'flex-end', 'flex-end']}>
                <Badge m={1} letterSpacing='wider' colorScheme='teal'>
                  {type}
                </Badge>
              </Flex>
            </Flex>
          </Flex>
          <Text color={useColorModeValue('gray.600', 'gray.100')}>
            {children}
          </Text>
        </Stack>
      </Flex>
      </Link>
    );
  };

export default ExpFeature;