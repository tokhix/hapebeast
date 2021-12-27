import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../../styles/Welcome.module.css'

const Welcome: NextPage = () => {

    return (
    <div className={styles.container}>
        <motion.div className={styles.title} initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{
                type: "spring",
                repeat: 1,
                repeatType: "reverse",
                duration: 0.5,
            }}>
            WE
        </motion.div>

        <motion.div className={styles.title} initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{
                type: "spring",
                delay: 1,
                repeat: 1,
                repeatType: "reverse",
                duration: 0.5,
            }}>
            ARE
        </motion.div>
        <motion.div className={styles.title} initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{
                type: "spring",
                delay: 2,
                duration: 0.5,
            }}>
            HAPEBEAST
        </motion.div>
        {/* <h2>
            ARE
        </h2>
        <h2>
            HAPEBEAST
        </h2> */}
    </div>
  )

}

export default Welcome