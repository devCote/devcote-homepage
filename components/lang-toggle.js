import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorModeValue } from '@chakra-ui/react'
import { UaIcon, EngIcon } from './icons'
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
        <IconButton
          aria-label="Toggle Language"
          ml={2}
          colorScheme={useColorModeValue('none', 'none')}
          borderStyle="solid" borderColor={'#555555'} borderWidth={1}
          icon={lang === true ? <UaIcon /> : <EngIcon />}
          onClick={() => setLang(!lang)}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};


