import { Container, Box, Heading, Text, Image, useColorMode } from '@chakra-ui/react'
import theme from '../lib/theme'
import Section from '../components/section'
import { useLang } from '../lib/langContext'


const Page = () => {

  const { lang } = useLang()
  const { colorMode } = useColorMode()
  const apos = "'"

  return (
    <Container>
      <Box borderRadius={"md"}
        bg={colorMode === 'dark' ? '#303030' : '#fbd38d'}
        p={3} mb={6} align="center" mt={12}>
        {lang ? `Hello! I${apos}m a full-stack developer from Ukraine`
          : 'Вітаю! Я веб розробник з України'}
      </Box>
      <Box display={{ md: 'flex' }} mb={{ base: 4, md: 0 }}>
        <Box flexGrow={1} mb={6}>
          <Heading as='h1' fontSize={{ base: '46', sm: '66' }} variant="page-title" fontFamily={theme.fonts.signature}>
            Dmytro Bakhanenko
          </Heading>
          <Text mt={{ base: '0', sm: '-4' }} fontWeight='bold' align='right'>
            {lang ? "devCote ( Artist / Designer / Developer )" : "devCote ( Митець / Дизайнер / Програміст )"}
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
      <Section delay={0.2}>
        <Box>
        </Box>
      </Section>
      <Section delay={0.6} >
        <Heading as={'h3'} mt={{ base: '-50px', lg: '-20px' }} variant='section-title'>
          About
        </Heading>
        <Text>
          {lang ? 'Wow, the cool kids are already coding at age 7. Meanwhile, I started at age 25. I heard that electronics engineering had programming subjects, so I decided to study it in advance. My first language was C++, and I must say that I quite got the basics of programming. I learned the syntax, operations, looping, conditionals, and little of object-oriented programming.' : "Вау, круті діти вже кодують у віці 7 років. Тим часом я почав у віці 25 років. Я чув, що електроніка техніки має предмети програмування, тому я вирішив вивчити його заздалегідь. Моєю першою мовою був C++, і я повинен сказати, що я цілком отримав основи програмування. Я вивчив синтаксис, операції, петлі, умовні умови та мало об'єктно-орієнтованого програмування."}
        </Text>
      </Section>
    </Container >
  )
}

export default Page


