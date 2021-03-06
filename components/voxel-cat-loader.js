import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const CatSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const CatContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="cat"
    m="auto"
    mt={['-40px', '-120px', '-220px']}
    mb={['-60px', '-140px', '-220px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
    zIndex={-10}
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <CatContainer>
      <CatSpinner />
    </CatContainer>
  )
}

export default Loader
