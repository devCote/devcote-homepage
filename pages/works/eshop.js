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
        Italy Fashion Online Shop <Badge>2021-</Badge>
      </Title>
      <WorkImage src="/images/works/eshop_items.png" alt="eshop image" />
      <P>
        An image analyzing app using prediction model with neural network api, that can predict gender, age and race.
        Moreover it can analyze what is shown at the photo, find face and do some celebrity recognition.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://italyshopnumberone.web.app/" target='_blank'>
            https://italyshopnumberone.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Firebase Web App + AWS server for message bot</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, SASS, AWS, Redux, Redux-saga, typescript, firestore, firebase </span>
        </ListItem>
        <ListItem>
          <Meta>Source Code</Meta>
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

export default Work
export { getServerSideProps } from '../../components/chakra'
