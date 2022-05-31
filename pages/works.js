import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import typeReader from '../public/images/works/type_reader.png'
import eshop from '../public/images/works/eshop.png'
import imageRecognize from '../public/images/works/faceAnalyze1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="type-reader" title="Type Reader" thumbnail={typeReader} >
            An app where you can try you skills in blind touch typing, supports all browsers
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="eshop" title="Eshop" thumbnail={eshop} >
            Internet shop, where you can admin add/remove collections iteams dynamically
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="image-recognize" title="image-recognize" thumbnail={imageRecognize} >
            An image analyzing app using prediction model with neural network
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
