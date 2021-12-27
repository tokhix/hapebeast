import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/Loading.module.css'
import Sidebar from './Sidebar'

const Loading: NextPage = () => {

  return (
    <div className={styles.loading}>
        <div className={styles.snippet}>
            <div className={styles.stage}>
                <div className={styles.dotTyping}></div>
            </div>
        </div>
    </div>


  )
}

export default Loading