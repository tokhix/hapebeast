import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/SideBar.module.css'

const Sidebar: NextPage = () => {

  return (
    <div className={styles.sidebar}>
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h4>Events</h4>
                <a href="#">See all</a>
            </div>
            <div className={styles.cardEvent}>
                <div className={styles.cardBg} style={{backgroundColor: '#FE9431'}}>
                    <h4><span>JAN</span>19</h4>
                </div>
                <h4 className={styles.eventInfo}>First Collection Drop <span>A drop of 8,192 unique hapes on the Ethereum Blockchain</span> </h4>
            </div>
            <div className={styles.cardEvent} >
                <div className={styles.cardBg} style={{backgroundColor: '#10d876'}}>
                    <h4><span >FEV</span>22</h4>
                </div>
                <h4 className={styles.eventInfo}>Hapeventure Day <span>NFTs are good, but saving the planet is better, join us!</span> </h4>
            </div>
            <div className={styles.cardEvent}>
                <div className={styles.cardBg} style={{backgroundColor: '#10d876'}}>
                    <h4><span>APR</span>30</h4>
                </div>
                <h4 className={styles.eventInfo}>Music to HAPE to  <span>The best musicians will gather, prove your talent!</span> </h4>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h4>Arts</h4>
                <a href="/home">See all</a>
            </div>
            <div className={styles.cardGalery}>
                <div className={styles.galery}>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart1.webp" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart2.webp" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart3.webp" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart4.webp" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart5.webp" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart6.webp" alt="Portfolio"/>
                    </div>
                </div>
            </div>
            <div className={styles.moreBtn}><a href="/home"><i className="far fa-share-square"></i> More</a></div>
        </div>
    </div>
  )
}

export default Sidebar