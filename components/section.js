import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export const Section = ({ children, delay = 0 }) => (
  <StyledDiv initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={4}
  >
    {children}
  </StyledDiv>
)

export const AnimationHeader = ({ children, delay = 0, initialPosition = -300, rotate = 0 }) => (
  <StyledDiv
    initial={{ x: initialPosition, opacity: 0, rotate }}
    animate={{ x: 0, opacity: 1, rotate: 0 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </StyledDiv>
)

