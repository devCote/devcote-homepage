import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Section } from '../components/section'
import { StudyGridItem } from '../components/grid-item'
import { works } from '../lib/text'
import { useLang } from '../lib/langContext'

import tableImg from '../public/images/studies/table.png'
import timerImg from '../public/images/studies/timer.png'

const Studies = () => {
  const { lang } = useLang()
  const { table, timer } = works

  return (
    <Layout title="Studies">
      <Container>
        <Heading as="h3" fontSize={30} my={4}>
          {lang ? "Case Studies" : "Учебные материалы"}
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <StudyGridItem id="table" title={lang ? table.title.en : table.title.ru} thumbnail={tableImg} >
              {lang ? table.text.en : table.text.ru}
            </StudyGridItem>
          </Section>
          <Section>
            <StudyGridItem id="timer" title={lang ? timer.title.en : timer.title.ru} thumbnail={timerImg} >
              {lang ? timer.text.en : timer.text.ru}
            </StudyGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Studies
export { getServerSideProps } from '../components/chakra'
