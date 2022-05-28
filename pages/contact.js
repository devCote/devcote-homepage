import { Container, Heading } from '@chakra-ui/react'
import { Section } from '../components/section'
import ContactMe from '../components/contact-form'
import { useLang } from '../lib/langContext'

const Contact = () => {
  const { lang } = useLang()

  return (
    <Container>
      <Heading as="h3" fontSize={30} mb={6} mt={6}>
        {lang ? 'Send Me a Message' : 'Отправьте мне сообщение'}
      </Heading>
      <Section>
        <ContactMe />
      </Section>
    </Container>
  )
}

export default Contact
export { getServerSideProps } from '../components/chakra'

