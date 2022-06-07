import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useLang } from '../../lib/langContext'
import { works } from '../../lib/text'

const Work = () => {
  const { lang } = useLang()
  const { title, text } = works.typeReader
  const { website, platform, stack, source } = works.breadcrumbs

  return (
    <Layout title={lang ? title.en : title.ru}>
      <Container mt={6}>
        <Title>
          {lang ? title.en : title.ru} <Badge>2021-</Badge>
        </Title>
        <WorkImage src="/images/works/type_reader1.png" alt="typereader image" />
        <P>
          {lang ? text.en : text.ru}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{lang ? website.en : website.ru}</Meta>
            <Link href="https://type-reader.web.app/" target='_blank'>
              https://type-reader.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{lang ? platform.en : platform.ru}</Meta>
            <span>Google Firebase Web App with firestore database for statistics</span>
          </ListItem>
          <ListItem>
            <Meta>{lang ? stack.en : stack.ru}</Meta>
            <span>React, SASS, AWS, Redux, Redux-saga, typescript, firestore, firebase </span>
          </ListItem>
          <ListItem>
            <Meta>{lang ? source.en : source.ru}</Meta>
            <Link href='https://github.com/devCote/Type-Reader'>
              Github Repository
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/type_reader2.png" alt="typereader image" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
