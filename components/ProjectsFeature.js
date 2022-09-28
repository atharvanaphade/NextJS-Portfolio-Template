import React from 'react';
import { Box, Link, Flex, Stack, Heading, Text, Badge, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectsFeature = ({ title, href, languages, children }) => {
    const [opacity, setOpacity] = React.useState(0);
    return (
      <Box mb={10}>
        <Link
          href={href}
          title={title}
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
            p={6}>
            <Stack w={'full'}>
              <Flex justify='space-between'>
                <Heading as='h4' size='md' fontWeight='bold' mb={2}>
                  {title}
                </Heading>
                <ExternalLinkIcon opacity={opacity} fontSize='2xl' />
              </Flex>
              <Text color={useColorModeValue('gray.600', 'gray.100')}>
                {children}
              </Text>
              <Flex
                w={'full'}
                justifyContent={'flex-start'}
                pt={3}
                flexWrap='wrap'>
                {languages.map((language, index) => (
                  <Badge
                    key={index}
                    m={1}
                    letterSpacing='wider'
                    colorScheme='teal'>
                    {language}
                  </Badge>
                ))}
              </Flex>
            </Stack>
          </Flex>
        </Link>
      </Box>
    );
  };

export default ProjectsFeature;