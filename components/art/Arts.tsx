import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import styles from '../../styles/Arts.module.css'
import Loading from '../Jungle/Loading'

const Arts: NextPage = () => {
    const arts = [
        {
           name: 'Arabic Community',
           img: '/imgs/posts/fanart1.jpg',
           avatar: '/imgs/users/4.jpg',
        },
        {
           name: 'French Community',
           img: '/imgs/posts/fanart11.jpg',
           avatar: '/imgs/users/5.jpg',
        },
        {
           name: 'Mental Health',
           img: '/imgs/posts/story2.jpg',
           avatar: '/imgs/users/6.jpg',
        },
        {
           name: 'Italian Community',
           img: '/imgs/posts/fanart2.jpg',
           avatar: '/imgs/users/9.jpg',
        },
        {
           name: 'Philippines Community',
           img: '/imgs/posts/fanart6.jpg',
           avatar: '/imgs/users/11.jpg',
        },
        {
            name: 'Sports',
            img: '/imgs/posts/fanart12.jpg',
            avatar: '/imgs/users/7.jpg',
        },
        {
            name: 'Sports',
            img: '/imgs/posts/fanart4.jpg',
            avatar: '/imgs/users/10.jpg',
        },
        {
            name: 'Sports',
            img: '/imgs/posts/fanart3.jpg',
            avatar: '/imgs/users/12.jpg',
        },
        {
            name: 'Sports',
            img: '/imgs/posts/fanart8.jpg',
            avatar: '/imgs/users/13.jpg',
        },
        {
            name: 'Sports',
            img: '/imgs/posts/fanart7.jpg',
            avatar: '/imgs/users/14.jpg',
        },
        {
            name: 'Sports',
            img: '/imgs/posts/fanart9.jpg',
            avatar: '/imgs/users/15.jpg',
        },
        {
            name: 'Sports',
            img: '/imgs/posts/fanart10.jpg',
            avatar: '/imgs/users/16.jpg',
        },
      ]
  return (
    <div className={styles.middleSidebarBottom}>
        <div className={styles.middleSidebarLeft}>
            <div className={styles.row}>
                <div className={styles.colXl12}>
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        duration: 1,
                    }}>
                    <div className={styles.title}>
                        <h2>
                        Fan Arts
                        <form action="#">
                            <div className={styles.search}>
                                <span className="lnr lnr-magnifier"></span>
                                <input type="text" placeholder="Search here." />
                            </div>
                        </form>
                        <a href="/" >
                            <span className="lnr lnr-funnel"></span>
                        </a>
                        </h2>
                    </div>
                    </motion.div>
                    <div className={styles.arts}>

                    {arts.map((art, index) => { return (

                        <motion.div key={index} className={styles.art} initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: (index + 1) * 0.1
                        }}>
                            <div className={styles.artContainer} style={{backgroundImage: `url(${art.img})`}}>
                                <div className={styles.artBody}>
                                    <figure className={styles.artImg}>
                                        <img src={art.avatar} alt="avater"/>
                                    </figure>
                                    <div className={styles.clearfix}></div>
                                    <h4 className={styles.artTitle}>{art.name}</h4>
                                </div>
                            </div>
                        </motion.div>
                    )})}
                        <Loading />                        
                    </div>




                </div>
            </div>
        </div>
    </div>
  )
}

export default Arts