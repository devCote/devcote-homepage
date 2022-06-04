import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" position='relative' bottom={0}>
      &copy; {new Date().getFullYear()} Dmitriy Bakhanenko. All Rights Reserved.
    </Box>
  )
}

export default Footer
