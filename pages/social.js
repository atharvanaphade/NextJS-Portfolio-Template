import React from "react";
import { Box, VStack, Text, } from "@chakra-ui/layout";
import { Link, Button } from '@chakra-ui/react';
import Animation from "../components/AnimationContainer";
import MetaComponent from "../components/metaTagsComponent";
import fetcher from '../components/fetcher';
import useSWR from "swr";

const getRecentlyPlayed = () => {
    const { data, error } = useSWR('/api/recently-played', fetcher);
  
    if (error) {
      return {
        recentlyPlayed: null,
      };
    }
  
    return {
      recentlyPlayed: data,
    };
  };

const Social = () => {
    const { data, isLoading, error } = useSWR('/api/recently-played', fetcher);

    const { recentyPlayed } = getRecentlyPlayed();

    console.log("Now Playing: " + data);
    console.log("Recently Played : " + recentyPlayed);

    return(
        <Animation>
            <MetaComponent page='Social' />
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
                            Social
                        </Text>
                    </Box>
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-start'>
                        <Link href='/projects'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Projects
                            </Button>
                        </Link>
                    </Box>
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-end'>
                        <Link href='/'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Home
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Box>
        </Animation>
    )
}

export default Social;