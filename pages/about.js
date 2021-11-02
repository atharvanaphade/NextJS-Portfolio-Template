import { Box, VStack, Text } from "@chakra-ui/layout";
import Animation from "../components/AnimationContainer";
import React from "react";
import { Button } from "@chakra-ui/button";
import { Heading, Link } from "@chakra-ui/react";
import about from "../data/aboutData";
import MetaComponent from "../components/metaTagsComponent";

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

const About = () => {
    return (
        <Animation>
            <MetaComponent page='About' />
            <Box bg='transparent'>
                <VStack py={104} px='auto' spacing={5} direction={['column', 'column', 'row']}>
                    <Heading color='whiteAlpha.800' fontSize={['2xl', '2xl', '6xl']} fontStyle='monsterrat'>
                        About
                    </Heading>
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-start'>
                        <Link href='/'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Home
                            </Button>
                        </Link>
                    </Box>
                    <Text fontSize={['2xl', '2xl', '3xl']} color='whiteAlpha.800' align='center' w='70%'>
                        {about.about}
                    </Text>
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-end'>
                        <Link href='/skills'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Skills
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Box>
        </Animation>
    );
}

export default About;