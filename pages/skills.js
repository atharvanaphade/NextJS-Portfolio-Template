import { Button } from "@chakra-ui/button";
import { Box, VStack, Text } from "@chakra-ui/layout";
import { Heading, Flex, SimpleGrid, useColorModeValue, Stack, Link } from "@chakra-ui/react";
import Head from 'next/head';
import React from "react";
import Animation from "../components/AnimationContainer";
import skills from "../data/skillData";
import MetaComponent from "../components/metaTagsComponent";

const Feature = (props) => {
    const { color, children } = props;
    return (
      <Flex align='center'>
        <Flex
          alignItems='center'
          justifyContent='center'
          w={4}
          h={4}
          rounded='full'
          color={useColorModeValue(`${color}.600`, `${color}.100`)}
          bg={`${color}.400`}></Flex>
        <Flex h={8} ml={4} alignItems='center'>
          <Text
            fontWeight='semibold'
            letterSpacing='widest'
            color={useColorModeValue('gray.700', 'gray.400')}>
            {children}
          </Text>
        </Flex>
      </Flex>
    );
  };

const Skills = () => {
    return(
        <Animation>
            <MetaComponent page='Skills' />
            <Box bg='transparent'>
                <VStack py={45} px='auto' spacing={5} direction={['column', 'column', 'row']}>
                    <Heading color='whiteAlpha.800' fontSize={['2xl', '2xl', '6xl']} fontStyle='monsterrat'>
                        Skills
                    </Heading>
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-start'>
                        <Link href='/about'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                About
                            </Button>
                        </Link>
                    </Box>  
                        <Box
                            my={0}
                            w={'auto'} 
                            alignSelf='center'
                        >
                        <Box w='full' py='0' mx='auto'>
                        <SimpleGrid columns={{ base: 1, md: 3 }} gap={[16, 8]}>
                            <Box
                            rounded={'lg'}
                            shadow={'md'}
                            bg={useColorModeValue('gray.100', 'gray.900')}>
                            <Flex
                                direction='column'
                                justify='center'
                                align='center'
                                p='6'
                                borderBottomWidth='1px'
                                borderColor={useColorModeValue('gray.200', 'gray.600')}>
                                <Text
                                mb={1}
                                fontSize={{ base: 'sm', lg: 'xl' }}
                                fontWeight='bold'
                                letterSpacing='widest'
                                textTransform='uppercase'
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                Languages
                                </Text>
                            </Flex>
                            <Stack direction='column' p='6' spacing='3' flexGrow='1'>
                                {skills.languages.map(item => (
                                    <Feature key={item.name} color={item.color}>
                                        {item.name}
                                    </Feature>
                                ))}
                            </Stack>
                            </Box>

                            <Box
                            rounded={'lg'}
                            shadow={'md'}
                            bg={useColorModeValue('gray.100', 'gray.900')}>
                            <Flex
                                direction='column'
                                justify='center'
                                align='center'
                                p='6'
                                borderBottomWidth='1px'
                                borderColor={useColorModeValue('gray.200', 'gray.600')}>
                                <Text
                                mb={1}
                                fontSize={{ base: 'sm', lg: 'xl' }}
                                fontWeight='bold'
                                letterSpacing='widest'
                                textTransform='uppercase'
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                Frameworks
                                </Text>
                            </Flex>
                            <Stack direction='column' p='6' spacing='3' flexGrow='1'>
                                {skills.frameworks.map(item => (
                                    <Feature color={item.color} key={item.name}>
                                        {item.name}
                                    </Feature>
                                ))}
                            </Stack>
                            </Box>

                            <Box
                            rounded={'lg'}
                            shadow={'md'}
                            bg={useColorModeValue('gray.100', 'gray.900')}>
                            <Flex
                                direction='column'
                                justify='center'
                                align='center'
                                p='6'
                                borderBottomWidth='1px'
                                borderColor={useColorModeValue('gray.200', 'gray.600')}>
                                <Text
                                mb={1}
                                fontSize={{ base: 'sm', lg: 'xl' }}
                                fontWeight='bold'
                                letterSpacing='widest'
                                textTransform='uppercase'
                                color={useColorModeValue('gray.700', 'gray.400')}>
                                Tools
                                </Text>
                            </Flex>
                            <Stack direction='column' p='6' spacing='3' flexGrow='1'>
                                {skills.tools.map(item => (
                                    <Feature color={item.color} key={item.name}>
                                        {item.name}
                                    </Feature>
                                ))}
                            </Stack>
                            </Box>
                        </SimpleGrid>
                        </Box>
                    </Box>
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-end'>
                        <Link href='/exp'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Experience
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Box>
        </Animation>
    );
}

export default Skills;