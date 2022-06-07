import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Section } from '../components/section'
import { StudyGridItem } from '../components/grid-item'

import table from '../public/images/studies/table.png'
import timer from '../public/images/studies/timer.png'

const Studies = () => (
  <Layout title="Studies">
    <Container>
      <Heading as="h3" fontSize={30} my={4}>
        Case Studies
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <StudyGridItem id="table" title="Dynamic Table" thumbnail={table} >
            An app where you can try you skills in blind touch typing, supports all browsers
          </StudyGridItem>
        </Section>
        <Section>
          <StudyGridItem id="timer" title="Stop Watch" thumbnail={timer} >
            Internet shop, where you can admin add/remove collections iteams dynamically
          </StudyGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Studies
export { getServerSideProps } from '../components/chakra'
