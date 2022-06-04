import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Section } from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import { works } from '../lib/text'
import { useLang } from '../lib/langContext'
import typeReader from '../public/images/works/type_reader.png'
import eshop from '../public/images/works/eshop.png'
import imageRecognize from '../public/images/works/faceAnalyze1.png'

const Works = () => {

  const { lang } = useLang()

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={30} mb={4}>
          {lang ? 'Works' : 'Проекты'}
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="image-recognizer"
              title={lang ? works.imageRecognizer.title.en : works.imageRecognizer.title.ru}
              thumbnail={imageRecognize} >
              {lang ? works.imageRecognizer.text.en : works.imageRecognizer.text.ru}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="eshop"
              title={lang ? works.eshop.title.en : works.eshop.title.ru}
              thumbnail={eshop} >
              {lang ? works.eshop.text.en : works.eshop.text.ru}
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="type-reader"
              title={lang ? works.typeReader.title.en : works.typeReader.title.ru}
              thumbnail={typeReader} >
              {lang ? works.typeReader.text.en : works.typeReader.text.ru}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
export { getServerSideProps } from '../components/chakra'
