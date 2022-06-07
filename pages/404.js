import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'
import { useLang } from '../lib/langContext'

const NotFound = () => {
  const { lang } = useLang()
  return (
    <Container>
      <Heading as='h1'>{lang ? 'Not found' : 'Не найдено'}</Heading>
      <Text>{lang ? 'The page you are looking for was not found.' : 'Страница которую вы ищете не найдена'}</Text>
      <Divider my={6} />

      <Box my={6} align='center'>
        <NextLink href='/'>
          <Button colorScheme='teal'>{lang ? 'Return to home' : 'Вернуться на главную'}</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
