import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/Dressing.module.css'

const Dressing: NextPage = () => {
  const [drip, setDrip] = useState<any>({hats: 0, glasses: 0, chains: 0, clothes: 0})
  const [animated, setAnimated] = useState<boolean>(true)
  const [imgUrls, setImageUrls] = useState<Array<String>>([])
  useEffect(() => {
    let fragment = document.createDocumentFragment(); 
    for (let hats=0;hats<5; hats++){
      for (let glasses=0;glasses<5; glasses++){
        for (let chains=0;chains<5; chains++){
          for (let clothes=0;clothes<5; clothes++){
            const imgUrl = `/imgs/hapes/${hats}${glasses}${chains}${clothes}.webp`
            const linkEl = document.createElement('link');
            linkEl.setAttribute('rel', 'preload');
            linkEl.setAttribute('href', imgUrl);
            linkEl.setAttribute('as', 'image');
            fragment.appendChild(linkEl);    
          }
        }
      }
    } 

    document.head.appendChild(fragment);

  }, [])

  useEffect(() => {
    setTimeout(function () {
      setAnimated(false)    
    }, 3000);
    
  }, [animated])
  const hats = [
    {img: '/imgs/hats/nike.webp'},
    {img: '/imgs/hats/2.webp'},
    {img: '/imgs/hats/3.webp'},
    {img: '/imgs/hats/4.webp'},
  ]
  const chains = [
    {img: '/imgs/chains/1.webp'},
    {img: '/imgs/chains/2.webp'},
    {img: '/imgs/chains/3.webp'},
    {img: '/imgs/chains/4.webp'},
  ]
  const glasses = [
    {img: '/imgs/glasses/1.webp'},
    {img: '/imgs/glasses/2.webp'},
    {img: '/imgs/glasses/3.webp'},
    {img: '/imgs/glasses/4.webp'},
  ]
  const clothes = [
    {img: '/imgs/clothes/nike.webp'},
    {img: '/imgs/clothes/adidas.webp'},
    {img: '/imgs/clothes/lacoste.webp'},
    {img: '/imgs/clothes/levis.webp'},
  ]

  const changeHat = (name:any, index: number) => {
    setAnimated(false)
    const newDrip = index + 1 == drip[name] ? 0 : index + 1
    setDrip({...drip, [name]: newDrip
    })
    setAnimated(true)
  }
  const imgUrl = `/imgs/hapes/${drip.hats}${drip.glasses}${drip.chains}${drip.clothes}.webp`

  return (
    <div className={styles.dressing}>
      <div className={styles.media}>
      <motion.img key={imgUrl}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`${styles.image} ${animated ? styles.glitch : ''}`} src={imgUrl}/>
        {/* <img className={animated ? styles.rollOut : ''} src={`/imgs/0${drip.hats}${drip.chains}.jpg`} /> */}
      </div>
      <div className={styles.options}>
        <h1>STYLE YOUR HAPE</h1>

        <div className={styles.option}>
          <h2>Hats</h2>
          <ul className={styles.list}>
          {hats.map((hat, index) => { return (
            <li className={drip.hats == index + 1 ? styles.active: ''} onClick={() => changeHat('hats', index) } key={index}>
              <img src={hat.img} alt=""/>
            </li>
          )})}
          </ul>
        </div>

        <div>
          <h2>Glasses</h2>
          <ul className={styles.list}>
          {glasses.map((glass, index) => { return (
            <li className={drip.glasses == index + 1 ? styles.active: ''} onClick={() => changeHat('glasses', index) } key={index}>
              <img src={glass.img} alt=""/>
            </li>
          )})}
          </ul>
        </div>

        <div>
          <h2>Chains</h2>
          <ul className={styles.list}>
          {chains.map((chain, index) => { return (
            <li className={drip.chains == index + 1 ? styles.active: ''} onClick={() => changeHat('chains', index) } key={index}>
              <img src={chain.img} alt=""/>
            </li>
          )})}
          </ul>
        </div>

        <div>
          <h2>Clothes</h2>
          <ul className={styles.list}>
          {clothes.map((clothe, index) => { return (
            <li className={drip.clothes == index + 1 ? styles.active: ''} onClick={() => changeHat('clothes', index) } key={index}>
              <img src={clothe.img} alt=""/>
            </li>
          )})}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Dressing