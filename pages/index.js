import { Container, Box, Heading, Text, Image, useColorMode, } from '@chakra-ui/react'
import Section from '../components/section'
import { useLang } from '../lib/langContext'
import { hello, sign, about } from '../lib/text'
import Icons from '../components/TeachIcons'


const Page = () => {

  const { lang } = useLang()
  const { colorMode } = useColorMode()

  return (
    <Container>
      <Box borderRadius={"md"}
        bg={colorMode === 'dark' ? '#303030' : '#fbd38d'}
        p={3} mb={6} align="center" mt={'80px'}>
        {lang ? hello.en : hello.ru}
      </Box>
      <Box display={{ md: 'flex' }} mb={{ base: 4, md: 0 }}>
        <Box flexGrow={1} mb={6}>
          <Heading as='h1' fontSize={{ base: '46', sm: '66' }} variant="title">
            Dmytro Bakhanenko
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
      <Section delay={0.2} >
        <Heading as={'h3'} mt={{ base: '-40px', md: '0' }} variant='section-title'>
          {lang ? 'About' : 'Обо мне'}
        </Heading>
        <Text px={10}>
          {lang ? about.en : about.ru}
        </Text>
      </Section>
      <Section delay={0.6} >
        <Heading as={'h3'} variant='section-title'>
          {lang ? 'Tech' : 'Технологии'}
        </Heading>
        <Box align='center'>
          <Icons />
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        Art, Music,{' '}
        Drawing
        , Playing Guitar,{' '}
        Photography
        , Leica, Machine Learning
      </Section>


    </Container >
  )
}

export default Page


