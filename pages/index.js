import { Container, Box, Heading, Text, Image, useColorMode, } from '@chakra-ui/react'
import Section from '../components/section'
import { useLang } from '../lib/langContext'
import { Ireact, Iangular, Ijs, Inext, Iredux, Ihtml, Isass, Ichakra, Ipython, Iaws, Ifirebase, Imysql, Inode, Iredis, Iblender, Iadobe, Iunity, Ipostgress, Itailwind, Ibash, Ilinux, Ikubernetes, Inginx, Ivim } from '../components/icons'


const Page = () => {

  const { lang } = useLang()
  const { colorMode } = useColorMode()
  const apos = "'"

  return (
    <Container>
      <Box borderRadius={"md"}
        bg={colorMode === 'dark' ? '#303030' : '#fbd38d'}
        p={3} mb={6} align="center" mt={'80px'}>
        {lang ? `Hello! I${apos}m a full-stack developer from Ukraine`
          : 'Вітаю! Я веб розробник з України'}
      </Box>
      <Box display={{ md: 'flex' }} mb={{ base: 4, md: 0 }}>
        <Box flexGrow={1} mb={6}>
          <Heading as='h1' fontSize={{ base: '46', sm: '66' }} variant="title">
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
      <Section delay={0.2} >
        <Heading as={'h3'} mt={{ base: '-40px', md: '0' }} variant='section-title'>
          About
        </Heading>
        <Text px={10}>
          {lang ? 'Wow, the cool kids are already coding at age 7. Meanwhile, I started at age 25. I heard that electronics engineering had programming subjects, so I decided to study it in advance. My first language was C++, and I must say that I quite got the basics of programming. I learned the syntax, operations, looping, conditionals, and little of object-oriented programming.' : "Вау, круті діти вже кодують у віці 7 років. Тим часом я почав у віці 25 років. Я чув, що електроніка техніки має предмети програмування, тому я вирішив вивчити його заздалегідь. Моєю першою мовою був C++, і я повинен сказати, що я цілком отримав основи програмування. Я вивчив синтаксис, операції, петлі, умовні умови та мало об'єктно-орієнтованого програмування."}
        </Text>
      </Section>
      <Section delay={0.6} >
        <Heading as={'h3'} variant='section-title'>
          Tech
        </Heading>
        <Box align='center'>
          <Ireact boxSize={12} fill={'currentColor'} m={2} />
          <Inext boxSize={12} fill={'currentColor'} m={2} />
          <Iangular boxSize={12} fill={'currentColor'} m={2} />
          <Iredux boxSize={12} fill={'currentColor'} m={2} />
          <Ijs boxSize={12} fill={'currentColor'} m={2} />
          <Ihtml boxSize={12} fill={'currentColor'} m={2} />
          <Isass boxSize={12} fill={'currentColor'} m={2} />
          <Itailwind boxSize={12} fill={'currentColor'} m={2} />
          <Ichakra boxSize={12} fill={'currentColor'} m={2} />
          <Ipython boxSize={12} fill={'currentColor'} m={2} />
          <Inginx boxSize={12} fill={'currentColor'} m={2} />
          <Iaws boxSize={12} fill={'currentColor'} m={2} />
          <Ifirebase boxSize={12} fill={'currentColor'} m={2} />
          <Imysql boxSize={12} fill={'currentColor'} m={2} />
          <Ipostgress boxSize={12} fill={'currentColor'} m={2} />
          <Iredis boxSize={12} fill={'currentColor'} m={2} />
          <Inode boxSize={12} fill={'currentColor'} m={2} />
          <Iblender boxSize={12} fill={'currentColor'} m={2} />
          <Iadobe boxSize={12} fill={'currentColor'} m={2} />
          <Iunity boxSize={12} fill={'currentColor'} m={2} />
          <Ibash boxSize={12} fill={'currentColor'} m={2} />
          <Ilinux boxSize={12} fill={'#333'} m={2} />
          <Ikubernetes boxSize={12} fill={'currentColor'} m={2} />
          <Ivim boxSize={12} fill={'currentColor'} m={2} />
        </Box>
      </Section>
      <Section delay={0.2} >
        <Heading as={'h3'} mt={4} variant='section-title'>
          Works
        </Heading>
        <Box mx={10}>

          <Text>Lorem ipsum dolor sit amet</Text>
          <Text>onsectetur adipiscing elit</Text>
          <Text>sed do eiusmod tempor incididunt ut labore</Text>
        </Box>
      </Section>
    </Container >
  )
}

export default Page


