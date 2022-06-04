import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children }) => {
  const t = `Contact Dmitry Bakhanenko`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        <Head>
          <title>Contact Dmitry</title>
          <meta name="Contact Dmitry" content={t} />
        </Head>
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
