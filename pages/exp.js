import React from "react";
import { Heading, VStack, Box, Button, List, ListItem, ListIcon, Link } from "@chakra-ui/react";
import Animation from "../components/AnimationContainer";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ExpFeature from "../components/ExpProject";
import MetaComponent from "../components/metaTagsComponent";
import exp from "../data/expData";

const Experience = () => {
    return(
        <Animation>
            <MetaComponent page='Experience' />
            <Box bg='transparent' w='auto'>
                <VStack py={45} px='auto' spacing={2} direction={['column', 'column', 'row']}>
                    <Heading color='whiteAlpha.800' fontSize={['2xl', '2xl', '6xl']} fontStyle='monsterrat'>
                        Experience
                    </Heading>
                    <Box py={5} px={[3, 3, 20]} alignSelf='flex-start'>
                        <Link href='/skills'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Skills
                            </Button>
                        </Link>
                    </Box>
                    {exp.map(item => (
                        <Box w='70%' maxW='2xl' py='5' mx='auto' key={item.name}>
                            <ExpFeature
                                name={item.name}
                                years={item.years}
                                position={item.position}
                                type={item.type}
                                place={item.place}>
                                    <List spacing={3}>
                                        {item.desc.map(des => (
                                            <ListItem key={des}>
                                                <ListIcon as={CheckCircleIcon} color='green.500' />
                                                {des}
                                            </ListItem> 
                                        ))}
                                    </List>
                                </ExpFeature>
                        </Box>
                    ))}
                    <Box py={5} px={[3, 3, 20]} alignSelf='flex-end'>
                        <Link href='/projects'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Projects
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Box>
        </Animation>
    )
}

export default Experience;