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

const Work = () => (
  <Layout title="Inkdrop">
    <Container mt={6}>
      <Title>
        Image-recognizer <Badge>2020-</Badge>
      </Title>
      <WorkImage src="/images/works/faceAnalyze2.png" alt="face-analyze image" />
      <P>
        An image analyzing app using prediction model with neural network api, that can predict gender, age and race.
        Moreover it can analyze what is shown at the photo, find face and do some celebrity recognition.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://showmeyourface-23c01.web.app/" target='_blank'>
            https://showmeyourface.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Firebase Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, SASS, Tachyons, tsparticles, clarifai</span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link href='https://github.com/devCote/Show-Da-Face'>
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

export default Work
export { getServerSideProps } from '../../components/chakra'
