import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Welcome from '../components/transitions/welcome'

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setTimeout(function () {
      setLoaded(true)    
    }, 3000);
    
  }, [])
  return (
    <>
    {!loaded && <>
      <Welcome />
      </>}
      {loaded && <> 
  {/* <motion.div key={router.route} initial="pageInitial"
    animate="pageAnimate" variants={{
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1
    }
  }}> */}
    <Component {...pageProps} />
  {/* </motion.div> */}
  </>}
  </>
  )
}

export default MyApp
