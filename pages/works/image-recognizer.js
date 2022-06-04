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
  const { title, fullText } = works.imageRecognizer
  const { website, platform, stack, source } = works.breadcrumbs

  return (
    <Layout title={lang ? title.en : title.ru}>
      <Container mt={6}>
        <Title>
          {lang ? title.en : title.ru} <Badge>2020-</Badge>
        </Title>
        <WorkImage src="/images/works/faceAnalyze2.png" alt="face-analyze image" />
        <P>
          {lang ? fullText.en : fullText.ru}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{lang ? website.en : website.ru}</Meta>
            <Link href="https://showmeyourface-23c01.web.app/" target='_blank'>
              https://showmeyourface.web.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>{lang ? platform.en : platform.ru}</Meta>
            <span>Google Firebase Web App</span>
          </ListItem>
          <ListItem>
            <Meta>{lang ? stack.en : stack.ru}</Meta>
            <span>React, SASS, Tachyons, tsparticles, clarifai</span>
          </ListItem>
          <ListItem>
            <Meta>{lang ? source.en : source.ru}</Meta>
            <Link href='https://github.com/devCote/Show-Da-Face' target='_blank'>
              Github Repository
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/faceAnalyze1.png" alt="face-analyze image" />
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
