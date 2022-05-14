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
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        <IconButton
          aria-label="Toggle Language"
          variant="outline"
          icon={lang === true ? <UaIcon /> : <EngIcon />}
          onClick={setLang(!lang)}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};
