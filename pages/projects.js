import React from "react";
import { Box, Link, Flex, Stack, Heading, Text, Badge, VStack, Button, useColorModeValue, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Animation from "../components/AnimationContainer";
import ProjectsFeature from "../components/ProjectsFeature";
import MetaComponent from "../components/metaTagsComponent";
import projects from "../data/projectData";

const Projects = () => {
    return(
        <Animation>
            <MetaComponent page='Projects' />
            <Box bg='transparent'>
                <VStack py={45} px='auto' spacing={5} direction={['column', 'column', 'row']}>
                    <Box w='full' px={{ base: 10, lg: 4 }} mx='auto' textAlign='center'>
                        <Text
                            mb={2}
                            fontSize={{ base: '3xl', md: '5xl' }}
                            fontWeight='bold'
                            lineHeight='tight'
                            color='whiteAlpha.800'
                        >
                            Projects
                        </Text>
                    </Box>
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-start'>
                        <Link href='/exp'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Experience
                            </Button>
                        </Link>
                    </Box>
                    {projects.map(item => (
                        <Box w='70%' py='3' mx='auto' key={item.title}>
                            <ProjectsFeature
                                title={item.title}
                                href={item.href}
                                languages={item.languages}
                            >
                                <List spacing={3}>
                                    {item.desc.map(des => (
                                        <ListItem key={des}>
                                            <ListIcon as={CheckCircleIcon} color='green.500' />
                                            {des}
                                        </ListItem>
                                    ))}
                                </List>
                            </ProjectsFeature>
                        </Box>
                    ))}
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-end'>
                        <Link href='/social'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Social
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Box>
        </Animation>
    )
}

export default Projects;