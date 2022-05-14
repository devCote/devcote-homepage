import { Container, Box, Heading, Text, Image, useColorMode } from '@chakra-ui/react'
import theme from '../lib/theme'
import Section from '../components/section'


const Page = () => {


  const { colorMode } = useColorMode()

  return (
    <Container>
      <Box borderRadius={"md"}
        bg={colorMode === 'dark' ? '#303030' : 'red'}
        p={3} mb={6} align="center" mt={12}>
        Hello i&apos;m a full-stack developer from Ukraine
      </Box>
      <Box display={{ md: 'flex' }} mb={{ base: 4, md: 0 }}>
        <Box flexGrow={1} mb={6}>
          <Heading as='h1' fontSize={66} variant="page-title" fontFamily={theme.fonts.signature}>
            Dmytro Bakhanenko
          </Heading>
          <Text mt={-4} fontWeight='bold' align='right'>devCote ( Artist / Desighner / Developer )</Text>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}
          align='center'>
          <Image borderColor={"whiteAlpha.800"} borderWidth={2}
            borderStyle='solid' maxWidth='100px'
            display="inline-block" borderRadius='full'
            src='/me.jpeg' alt="profile img" />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Box>
          <Text>
            Wow, the cool kids are already coding at age 7. Meanwhile, I started at age 25. I heard that electronics engineering had programming subjects, so I decided to study it in advance. My first language was C++, and I must say that I quite got the basics of programming. I learned the syntax, operations, looping, conditionals, and little of object-oriented programming.
          </Text>
        </Box>

      </Section>
    </Container >
  )
}

export default Page


