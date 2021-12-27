import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import styles from '../../styles/Arts.module.css'
import Loading from '../Jungle/Loading'

const Arts: NextPage = () => {
    const arts = [
        {
           name: 'Arabic Community',
           img: '/imgs/users/0.jpg',
           description: '/imgs/users/1.jpg',
        },
        {
           name: 'French Community',
           img: '/imgs/users/12.jpg',
           description: '/imgs/users/2.jpg',
        },
        {
           name: 'Mental Health',
           img: '/imgs/users/13.jpg',
           description: '/imgs/users/3.jpg',
        },
        {
           name: 'Italian Community',
           img: '/imgs/users/16.jpg',
           description: '/imgs/users/4.jpg',
        },
        {
           name: 'Philippines Community',
           img: '/imgs/users/15.jpg',
           description: '/imgs/users/4.jpg',
        },
        {
            name: 'Sports',
            img: '/imgs/users/14.jpg',
            description: '/imgs/users/4.jpg',
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
                            <div className={styles.artContainer} style={{backgroundImage: "url('http://sociala.uitheme.net/assets/images/s-1.jpg')"}}>
                                <div className={styles.artBody}>
                                    <figure className={styles.artImg}>
                                        <img src="http://sociala.uitheme.net/assets/images/user-12.png" alt="avater"/>
                                    </figure>
                                    <div className={styles.clearfix}></div>
                                    <h4 className={styles.artTitle}>Aliqa Macale</h4>
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