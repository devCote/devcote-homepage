import Logo from "./Logo"
import { ThemeToggle } from "./theme-toggle"
import { LangToggle } from './lang-toggle'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import { useLang } from '../lib/langContext'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.500', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'glassTiel' : undefined}
        color={active ? '#666666' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const { lang } = useLang()

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(20px)' }}
      zIndex={1}
      {...props}>
      <Container
        display='flex'
        p={2}
        maxW="container.md"
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}>
          <LinkItem href='/works' path={path}>
            {lang ? 'Works' : "Проєкти"}
          </LinkItem>
          <LinkItem href='/posts' path={path}>
            {lang ? 'Posts' : "Пости"}
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggle />
          <LangToggle />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id='navbar-menu'>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>{lang ? "About" : "Про мене"}</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>{lang ? "Works" : "Проєкти"}</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>{lang ? "Posts" : "Пости"}</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box >

      </Container >
    </Box >
  )
}

export default Navbar