import { Container, Box, Heading, Text, Image, useColorMode, Button, ListItem, Link, List, SimpleGrid, GridItem, } from '@chakra-ui/react'
import { Section, AnimationHeader } from '../components/section'
import { useLang } from '../lib/langContext'
import { hello, sign, about, love } from '../lib/text'
import Icons from '../components/teach-icons'
import Layout from '../components/layouts/article'
import { useState } from 'react'
import { Iangular, Ibash, Igit, Inest, Ireact } from '../components/icons'
import typeReader from '../public/images/works/type_reader.png'


const Home = () => {

  const { lang } = useLang()
  const { colorMode } = useColorMode()
  const [iconName, setIconName] = useState()

  return (
    <Layout>
      <Container>
        <Box borderRadius={"md"}
          bg={colorMode === 'dark' ? '#18181a' : '#f1f1f1'}
          p={3} mb={6} align="center" mt={'80px'}
          css={{ backdropFilter: 'blur(20px)' }}>
          {lang ? hello.en : hello.ru}
        </Box>
        <Box display={{ md: 'flex' }} mb={{ base: 4, md: 0 }}>
          <Box flexGrow={1} mb={6}>
            <Heading as='h1' fontSize={{ base: '46', sm: '66' }} variant="title">
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
            <Heading fontSize={30} textAlign={'center'} as={'h2'}>{iconName}</Heading>
          </Box>
          <Box display='flex' justifyContent='space-between' flexWrap='wrap'>
            <Icons setIconName={setIconName} />
          </Box>
        </Section>
        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            {lang ? "I" : "Я"} ♥
          </Heading>
          <Text px={{ base: 0, md: 0 }}>
            {lang ? love.en : love.ru}
          </Text>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/devCote" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Ibash />}
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
                  leftIcon={<Ireact />}
                >
                  @type-reader app
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Iangular />}
                >
                  @craftzdog (日本語)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/craftzdog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Igit />}
                >
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/devaslife"
              title="Dev as Life"
              thumbnail={typeReader}
            >
              My YouTube channel (&gt;100k subs)
            </GridItem>
            <GridItem
              href="https://www.inkdrop.app/"
              title="Inkdrop"
              thumbnail={typeReader}
            >
              A Markdown note-taking app
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <Button rightIcon={<Inest />} colorScheme="teal">
              Popular posts
            </Button>
          </Box>
        </Section>
      </Container >
    </Layout >
  )
}

export default Home
