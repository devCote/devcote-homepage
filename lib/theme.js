import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#111')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#653abc',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'title': {
        fontFamily: 'Mr De Haviland'
      },
      'primary-color': {
        color: '#764abc'
      }
    },
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  signature: "'Mr De Haviland'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const languages = {
  currentLanguage: 'en'
}

const theme = extendTheme({ config, styles, components, fonts, colors, languages })
export default theme
