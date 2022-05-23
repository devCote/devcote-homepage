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
          : 'Привет! Я веб разработчик из Украины'}
      </Box>
      <Box display={{ md: 'flex' }} mb={{ base: 4, md: 0 }}>
        <Box flexGrow={1} mb={6}>
          <Heading as='h1' fontSize={{ base: '46', sm: '66' }} variant="title">
            Dmytro Bakhanenko
          </Heading>
          <Text mt={{ base: '0', sm: '-4' }} fontWeight='bold' align='right'>
            {lang ? "devCote ( Artist / Designer / Developer )" : "devCote ( Художник / Дизайнер / Програмист )"}
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
          {lang ?
            `Dmitriy is a freelance and full-stack developer from Kyiv Ukraine with a
            passion of building apps and services/stuff he likes. He has a stack
            of all the things for launching products, from planning and designing all the
            way to solving problems with code. When not online, he loves playing guitar, travelling and
            studying cyber security tech`

            : `Дмитрий - фрилансер и разработчик полного стека из Киева Украина. Имеет страсть к созданию приложений
            услуг и вещей, которые ему нравятся. У него есть знания для запуска продуктов, от планирования
            и проектирования до способов решения проблем с кодом. Когда он не онлайн, он любит играть на гитаре,
            путешествовать и изучать технологит кибербезопасности`}
        </Text>
      </Section>
      <Section delay={0.6} >
        <Heading as={'h3'} variant='section-title'>
          {lang ? 'Tech' : 'Технологии'}
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
          <Iunity boxSize={12} fill={'currentColor'} m={2} />
          <Ibash boxSize={12} fill={'currentColor'} m={2} />
          <Ilinux boxSize={12} fill={'#333'} m={2} />
          <Ikubernetes boxSize={12} fill={'currentColor'} m={2} />
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


