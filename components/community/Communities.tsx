import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import styles from '../../styles/Community.module.css'
import Loading from '../Jungle/Loading'

const Communities: NextPage = () => {
    const communities = [
        {
           name: 'Arabic Community',
           img: '/imgs/users/0.jpg',
           description: 'Arab Hapes are here',
           header: '/imgs/users/arab.jpg'
        },
        {
           name: 'French Community',
           img: '/imgs/users/12.jpg',
           description: 'French baguette, Bonjour!',
           header: '/imgs/users/france.jpg'
        },
        {
           name: 'Mental Health',
           img: '/imgs/users/13.jpg',
           description: 'We care about you mental health',
           header: '/imgs/users/mentalhealth.jpg'
        },
        {
           name: 'Italian Community',
           img: '/imgs/users/16.jpg',
           description: 'Ciao Bella, Ciao Ciao Ciao',
           header: '/imgs/users/italy.jpg'
        },
        {
           name: 'Philippines Community',
           img: '/imgs/users/15.jpg',
           description: 'We live in paradise :)',
           header: '/imgs/users/philippines.jpg'
        },
        {
            name: 'Sports',
            img: '/imgs/users/14.jpg',
            description: 'Everything sports related here!',
            header: '/imgs/users/sports.jpg'
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
                        Communities
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
                    <div className={styles.communties}>
                    {communities.map((community, index) => { return (
                        <motion.div key={index} className={styles.community} initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: (index + 1) * 0.1
                        }}>
                        <div className={styles.communityContainer}>
                            <div className={styles.communityBg} style={{backgroundImage: `url('${community.header}')`}}></div>
                            <div className={styles.communityInfo}>
                                <figure className={styles.communityImg}>
                                    <img src={community.img} alt="avater" />
                                </figure>
                                <h4>{community.name}</h4>
                                <p>{community.description}</p>
                                <span className={styles.communityBtns}>
                                    <a href="/defaultgroup" className={styles.Btn1}>
                                        <span className="lnr lnr-user"></span>
                                    </a>
                                    <a href="/defaultgroup" className={styles.Btn2}>JOIN</a>
                                </span>
                            </div>
                        </div></motion.div>
                        )})}
                        <Loading />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Communities