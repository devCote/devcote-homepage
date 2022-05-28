import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import typeReader from '../public/images/works/type_reader.png'
import eshop from '../public/images/works/eshop.png'

const Studies = () => (
  <Layout title="Studies">
    <Container>
      <Heading as="h3" fontSize={30} mb={4}>
        Case Studies
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
          <WorkGridItem id="inkdrop" title="inkdrop" thumbnail={eshop} >
            Bla bla bla bla ...
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Studies
export { getServerSideProps } from '../components/chakra'
