import Link from 'next/link'
import { Text } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { CatPaw } from './icons'
import { useLang } from "../lib/langContext"

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  #logo {
    transition: 400ms ease;
  }
  &:hover #logo {
    transform: rotate(-30deg);
  }
`

const Logo = () => {
  const { lang } = useLang()

  return (
    <Link href="/">
      <a>
        <LogoBox >
          <CatPaw color='#653abc' id='logo' boxSize={5} mb='2px' mr='-6px' />
          <Text color={'whiteAlfa.900'}
            fontFamily='M PLUS Rounded 1c' fontWeight='bold' ml={3}>
            {lang === true ? 'Dmitry Bakhanenko' : 'Дмитрий Баханенко'}
          </Text>
        </LogoBox>
      </a>
    </Link >
  )
}

export default Logo
