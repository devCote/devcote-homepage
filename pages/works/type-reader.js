import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
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
        <WorkImage src="/images/works/eshop_items.png" alt="eshop image" />
        <P>
          {lang ? text.en : text.ru}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{lang ? website.en : website.ru}</Meta>
            <Link href="https://italyshopnumberone.web.app/" target='_blank'>
              https://italyshopnumberone.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{lang ? platform.en : platform.ru}</Meta>
            <span>Google Firebase Web App + AWS server for message bot</span>
          </ListItem>
          <ListItem>
            <Meta>{lang ? stack.en : stack.ru}</Meta>
            <span>React, SASS, AWS, Redux, Redux-saga, typescript, firestore, firebase </span>
          </ListItem>
          <ListItem>
            <Meta>{lang ? source.en : source.ru}</Meta>
            <Link href='https://github.com/devCote/italyshopnumberone'>
              Github Repository
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/eshop_pay.png" alt="eshop image" />
        <AspectRatio maxW="640px" ratio={1.59} my={4}>
          <iframe
            src="https://www.youtube.com/embed/FV38lSU3OPg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </AspectRatio>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
