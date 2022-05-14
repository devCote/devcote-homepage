import Link from 'next/link'
import { Text, useColorModeValue } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { Gear } from './icons'
import { useLang } from "../lib/langContext"

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const { lang } = useLang()

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Gear boxSize={5} mr={'-6px'} fill={'#333'} />
          <Text color={useColorModeValue('gray.800', 'whiteAlfa.900')}
            fontFamily='M PLUS Rounded 1c' fontWeight='bold' ml={3}>
            {lang === true ? 'Dmytro Bakhanenko' : 'Дмитро Баханенко'}
          </Text>
        </LogoBox>
      </a>
    </Link >
  )
}

export default Logo
