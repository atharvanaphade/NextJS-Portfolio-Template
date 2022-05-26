import React from "react";
import { Box, VStack, Text, Stack, List, ListItem, Heading, ListIcon, Center, } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link, Button } from '@chakra-ui/react';
// import Link from 'next/link';
import MetaComponent from "../components/metaTagsComponent";
import fetcher from '../components/fetcher';
import useSWR from "swr";
import { IoMusicalNotesOutline, IoMusicalNoteOutline, IoLogoInstagram, IoGitBranch, IoLogoLinkedin, IoLogoWordpress, IoLogoGithub, IoLogoMedium } from 'react-icons/io5';

const Social = () => {
    const { data, isLoading, error } = useSWR('/api/now-playing', fetcher);

    const { data: recentlyPlayed, isLoadingRP, errorRP } = useSWR('/api/recently-played', fetcher);

    return(

        <>
            <MetaComponent page='Social' />
            <Box bg='transparent'>
                <VStack py={35} px='auto' spacing={5} direction={['column', 'column', 'row']}>
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
                    <Box py={25} px={[3, 3, 20]} alignSelf='flex-start'>
                        <Link href='/projects'>
                            <Button _hover={{ bg: 'whiteAlpha.100' }} color='whiteAlpha.800' variant='outline'>
                                Projects
                            </Button>
                        </Link>
                    </Box>
                    <Stack spacing='24px' direction={['column', 'column', 'row']} alignSelf='center'>
                        <Box width='100%' bg='whiteAlpha.900' mx='flex' px={2} color='blackAlpha.800'>
                            <Center mt={5}>
                                <Image borderRadius="full" boxSize='70px' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png" alt="spotify icon" />
                            </Center>
                            <List p={5} spacing={3} w='100%'>
                                <ListItem>
                                    {data && !isLoading ? (
                                        <Heading fontSize={['lg', 'ls', '2xl']} color='blackAlpha.800' >
                                            <ListIcon as={IoMusicalNotesOutline} /> Now Playing
                                            <Text fontSize='xs'>
                                                {data.isPlaying ? (
                                                    <Link href={data.songUrl}>{data.title} - {data.artist}</Link>
                                                ) : ('Idle')}
                                            </Text>
                                        </Heading>
                                    ) : (
                                        <Heading>
                                            <ListIcon as={IoMusicalNotesOutline} /> Idle
                                        </Heading>
                                    )}
                                </ListItem>
                                <ListItem>
                                    {recentlyPlayed && !isLoadingRP ? (
                                        <Heading fontSize={['lg', 'ls', '2xl']} color='blackAlpha.800' >
                                            <ListIcon as={IoMusicalNoteOutline} /> Recently Played
                                            <Text fontSize='xs'>
                                                <Link href={recentlyPlayed.songUrl}>
                                                    {recentlyPlayed.artist} - {recentlyPlayed.title}
                                                </Link>
                                            </Text>
                                        </Heading>
                                    ) : (
                                        <Heading>
                                            <ListIcon as={IoMusicalNotesOutline} /> Idle
                                        </Heading>
                                    )}
                                </ListItem>
                            </List>
                        </Box>
                        <Box bg='whiteAlpha.900' w='full' mx='125%' px={2} color='blackAlpha.800'>
                            <VStack spacing={5} py={10}>
                                <Link href='https://www.instagram.com/atharvanaphade/'>
                                    <Button color='blackAlpha.700' leftIcon={<IoLogoInstagram />}>
                                        Instagram
                                    </Button>
                                </Link>
                                <Link href='https://github.com/atharvanaphade/'>
                                    <Button color='blackAlpha.700' leftIcon={<IoLogoGithub />}>
                                        GitHub
                                    </Button>
                                </Link>
                                <Link href='https://www.linkedin.com/in/atharva-naphade/'>
                                    <Button color='blackAlpha.700' leftIcon={<IoLogoLinkedin />}>
                                        LinkedIn
                                    </Button>
                                </Link>
                                <Link href='https://blog.atharvanaphade.me/'>
                                    <Button color='blackAlpha.700' leftIcon={<IoLogoWordpress />}>
                                        Blog
                                    </Button>
                                </Link>
                            </VStack>
                        </Box>
                        <Box bg='whiteAlpha.900' w='full' mx='125%' px={2} color='blackAlpha.800'>
                            <VStack spacing={5} py={10}>
                                <Link href='https://bit.ly/atharvanaphade_resume'>
                                    <Button align='center' color='blackAlpha.700' leftIcon={<IoLogoMedium />}>
                                            Resume
                                    </Button>
                                </Link>
                            </VStack>
                        </Box>
                    </Stack>
                    <Box py={30} px={[3, 3, 20]} alignSelf='flex-end'>
                        <Link href='/'>
                            <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                                Home
                            </Button>
                        </Link>
                    </Box>
                </VStack>
            </Box>
        </>
    )
}

export default Social;
