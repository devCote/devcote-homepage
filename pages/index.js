import { Container, Box, Heading, Text, Image, useColorMode, } from '@chakra-ui/react'
import { Section, AnimationHeader } from '../components/section'
import { useLang } from '../lib/langContext'
import { hello, sign, about, love } from '../lib/text'
import Icons from '../components/TeachIcons'
import { useState } from 'react'


const Page = () => {

  const { lang } = useLang()
  const { colorMode } = useColorMode()
  const [iconName, setIconName] = useState()

  return (
    <Container>
      <Box borderRadius={"md"}
        bg={colorMode === 'dark' ? '#18181a' : '#f2eccf'}
        p={3} mb={6} align="center" mt={'80px'}
        css={{ backdropFilter: 'blur(20px)' }}>
        {lang ? hello.en : hello.ru}
      </Box>
      <Box display={{ md: 'flex' }} mb={{ base: 4, md: 0 }}>
        <Box flexGrow={1} mb={6}>
          <AnimationHeader delay={0.2} >
            <Heading as='h1' fontSize={{ base: '46', sm: '66' }} variant="title">
              Dmitry Bakhanenko
            </Heading>
            <Text mt={{ base: '0', sm: '-4' }} fontWeight='bold' align='right'>
              {lang ? sign.en : sign.ru}
            </Text>
          </AnimationHeader>
        </Box>
        <AnimationHeader delay={0.2} initialPosition={300} rotate={180} >
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
            align='center'>
            <Image borderColor={"whiteAlpha.800"} borderWidth={2}
              borderStyle='solid' maxWidth='100px'
              display="inline-block" borderRadius='full'
              src='/me.jpeg' alt="profile img" />
          </Box>
        </AnimationHeader>
      </Box>
      <Section delay={0.8} >
        <Heading as={'h3'} mt={{ base: '-40px', md: '0' }} variant='section-title'>
          {lang ? 'About' : 'Обо мне'}
        </Heading>
        <Text px={{ base: 0, md: 0 }}>
          {lang ? about.en : about.ru}
        </Text>
      </Section>
      <Section delay={1.2} >
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
      <Section delay={1.6}>
        <Heading as="h3" variant="section-title">
          {lang ? "I" : "Я"} ♥
        </Heading>
        <Text px={{ base: 0, md: 0 }}>
          {lang ? love.en : love.ru}
        </Text>
      </Section>
    </Container >
  )
}

export default Page


