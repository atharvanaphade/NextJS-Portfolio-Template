import { Center, Stack, Text, VStack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import Head from 'next/head'
import Link from 'next/link';
import Animation from '../components/AnimationContainer';

export default function Home() {
  return (
    <Animation>
        <Head>
          <title>Not Found | Atharva Naphade | Software Engineer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Box bg='transparent' height={['1080', '640', '720']} alignItems='center'>
          <VStack py={180} px='auto' spacing={5} direction={['column', 'column', 'row']}>
              <Center alignItems='center' marginLeft={['auto', 'auto', 'auto']}>
                <Stack w='50%' alignSelf='center' spacing={5} direction={['column', 'column', 'row']}>
                  <Box alignItems='center'>
                    <Text fontStyle='monsterrat' align='center' color='whiteAlpha.800' fontSize={['lg', 'lg', '3xl']}>
                    404
                    </Text>
                  </Box>
                  <Box alignItems='center'>
                    <Text fontStyle='monsterrat' align='center' color='whiteAlpha.800' fontSize={['sm', 'sm', 'xl']}>
                    Lost is an American drama television series that originally aired on ABC from September 22, 2004, to May 23, 2010, over six seasons, comprising a total of 121 episodes
                    </Text>
                  </Box>
                  <Box alignItems='center'>
                    <Text fontStyle='monsterrat' align='center' color='whiteAlpha.800' fontSize={['sm', 'sm', 'xl']}>
                    You are Lost click the button to go home.
                    </Text>
                  </Box>
                </Stack>
              </Center>
              <Link href='/'>
                <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                    Home
                </Button>
              </Link>
          </VStack>
        </Box>
    </Animation>
  )
}
