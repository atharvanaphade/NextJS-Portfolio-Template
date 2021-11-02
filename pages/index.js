import { Center, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/layout'
import { Box, Image, Link } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import Icon from '../components/icons/Icon'
import { motion } from 'framer-motion'
import TypewriterComponent from 'typewriter-effect';
import Animation from '../components/AnimationContainer';
import about from '../data/aboutData'
import MetaComponent from '../components/metaTagsComponent'

export default function Home() {
  const List = [
    {name: 'About', url: 'about'},
    {name: 'Skills', url: 'skills'},
    {name: 'Experience', url: 'exp'},
    {name: 'Projects', url: 'projects'},
    {name: 'Social', url: 'social'},
  ]

  return (
    <Animation>
        <MetaComponent page='Home' />
        <Box bg='transparent' alignItems='center'>
          <VStack pt={180} pb={125} px='auto' spacing={5} direction={['column', 'column', 'row']}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut'
              }}
            >
              <Center alignItems='center' marginLeft={['50px', 'auto', 'auto']}>
                <HStack spacing={5}>
                  <Image
                    borderRadius='full'
                    fit='cover'
                    boxSize='150px'
                    src='/profile.jpeg'
                  />
                  <Box alignItems='center'>
                    <Text fontStyle='monsterrat' color='whiteAlpha.800' fontSize={['3xl', '3xl', '6xl']}>
                      {about.name}
                    </Text>
                  </Box>
                </HStack>
              </Center>
            </motion.div>
            <Box color='whiteAlpha.800' alignItems='center' py={0}>
              <HStack spacing={10}>
                {about.links.map(link => (
                  <Box h={7} w={7} my={7} key={1}>
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 1.35 }}
                      transition={{
                        duration: 0.1,
                        ease: 'easeInOut'
                      }}
                      >
                      <Button _hover={{ bg: 'transparent' }} size='xl' bg='transparent' variant='ghost'>
                        <Icon name={link.name} />
                      </Button>
                    </motion.div>
                  </Box>
                ))}
              </HStack>
            </Box>
            <Center fontSize={['lg', 'lg', '2xl']} py={5} bg='transparent' color='whiteAlpha.800'>
              <TypewriterComponent
                options={{
                  strings: about.typewriter,
                  autoStart: true,
                  loop: true,
                  color: 'whiteAlpha.800'
                }}
              />
            </Center>
            <SimpleGrid align='center' direction='column' columns={[1, 1, 5]} spacing={20}>
              {List.map(item => (
                  <Link key={item.name} href={item.url}>
                    <Button _hover={{ bg: 'whiteAlpha.300' }} color='whiteAlpha.800' variant='outline'>
                      {item.name}
                    </Button>
                  </Link>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
    </Animation>
  )
}
