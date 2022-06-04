import { Container, Box, Heading, Text, Image, useColorMode, Button, ListItem, Link, List } from '@chakra-ui/react'
import { Section } from '../components/section'
import { useLang } from '../lib/langContext'
import { hello, sign, about, love } from '../lib/text'
import Icons from '../components/teach-icons'
import Layout from '../components/layouts/article'
import { useState } from 'react'
import { Igithub, Ilinkedin, Inest, Itwitter, Iweb } from '../components/icons'


const Home = () => {

  const { lang } = useLang()
  //const { colorMode } = useColorMode()
  const [iconName, setIconName] = useState()

  return (
    <Layout>
      <Container>
        <Box borderRadius={"md"}
          bg={'teal'}
          p={3} mb={6} align="center" mt={'80px'}
          css={{ backdropFilter: 'blur(20px)' }} color='white'>
          {lang ? hello.en : hello.ru}
        </Box>
        <Box display={{ md: 'flex' }} mb={{ base: 4, md: 0 }}>
          <Box flexGrow={1} mb={6}>
            <Heading as='h1'
              fontSize={{ base: '46', sm: '66' }}
              variant="title">
              Dmitry Bakhanenko
            </Heading>
            <Text mt={{ base: '0', sm: '-4' }} fontWeight='bold' align='right'>
              {lang ? sign.en : sign.ru}
            </Text>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
            align='center'>
            <Image borderColor={"whiteAlpha.800"} borderWidth={2}
              borderStyle='solid' maxWidth='100px'
              display="inline-block" borderRadius='full'
              src='/me.jpeg' alt="profile img" />
          </Box>
        </Box>
        <Section delay={0.4} >
          <Heading as={'h3'} mt={{ base: '-40px', md: '0' }} variant='section-title'>
            {lang ? 'About' : 'Обо мне'}
          </Heading>
          <Text px={{ base: 0, md: 0 }}>
            {lang ? about.en : about.ru}
          </Text>
        </Section>
        <Section delay={0.6} >
          <Box display={'flex'} justifyContent='space-between'>
            <Heading as={'h3'} variant='section-title'>
              {lang ? 'Tech' : 'Технологии'}
            </Heading>
            <Heading fontSize={30} textAlign={'center'} as={'h2'} variant='primary-color'>{iconName}</Heading>
          </Box>
          <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
            <Icons setIconName={setIconName} />
          </Box>
        </Section>
        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            {lang ? 'I ♥' : 'Я ♥'}
          </Heading>
          <Text px={{ base: 0, md: 0 }}>
            {lang ? love.en : love.ru}
          </Text>
        </Section>
        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            {lang ? `On the web` : `В сети`}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/devCote" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Igithub />}
                >
                  @devCote on github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://type-reader.web.app" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Iweb />}
                >
                  @My Italy Fashion Shop
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/DefCote" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Itwitter />}
                >
                  @Twitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/dmitriy-bakhanenko-41a416150/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Ilinkedin />}
                >
                  @Linkedin
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container >
    </Layout >
  )
}

export default Home
