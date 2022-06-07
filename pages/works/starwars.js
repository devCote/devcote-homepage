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
  const { title, text } = works.starWars
  const { website, platform, stack, source } = works.breadcrumbs

  return (
    <Layout title={lang ? title.en : title.ru}>
      <Container mt={6}>
        <Title>
          {lang ? title.en : title.ru} <Badge>2020-</Badge>
        </Title>
        <WorkImage src="/images/works/starWars1.png" alt="starwars image" />
        <P>
          {lang ? text.en : text.ru}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{lang ? website.en : website.ru}</Meta>
            <Link href="https://star-wars-info-platform.web.app/" target='_blank'>
              https://star-wars-info-platform.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{lang ? platform.en : platform.ru}</Meta>
            <span>Google Firebase Web App</span>
          </ListItem>
          <ListItem>
            <Meta>API</Meta>
            <span>google search images api, star wars database api</span>
          </ListItem>
          <ListItem>
            <Meta>{lang ? stack.en : stack.ru}</Meta>
            <span>React, Css, Js</span>
          </ListItem>
          <ListItem>
            <Meta>{lang ? source.en : source.ru}</Meta>
            <Link href='https://github.com/devCote/Star-Wars'>
              Github Repository
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/starWars2.png" alt="typereader image" />
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
