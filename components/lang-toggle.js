import { AnimatePresence, motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import { useLang } from '../lib/langContext'

export const LangToggle = () => {
  const { lang, setLang } = useLang()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={lang}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Box
          onClick={() => setLang(!lang)}
          textAlign='center'
          w='38px'
          h='38px'
          position='relative'
          outline={'1px solid currentColor'}
          borderRadius={6}
          cursor="pointer"
          fontSize={22}
          transform='translate(0,2px)'
          ml={1.5}
        >{lang ? 'Ru' : 'En'}</Box>
      </motion.div>
    </AnimatePresence >
  );
};


