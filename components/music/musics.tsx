import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../../styles/Musics.module.css'
import Loading from '../Jungle/Loading'

const Music: NextPage = () => {
   const musics = [
      {
         name: 'Camaraderie',
         avatar: '/imgs/users/1.webp',
         youtubeId: 'eE9z9bBqPkA',
         description: 'Check out my new track for the hapebeast fam!',
         time: '22 min ago',
         style: 'house'
      },
      {
         name: 'TLG',
         avatar: '/imgs/users/4.webp',
         youtubeId: 'hKedWnK4NrM',
         description: 'Wasgud Hapes! I\'m so excited to be part of the community as a recording artist. Check out my new music video "Red Light Green Light"',
         time: '22 min ago',
         style: 'house'
      },
      {
         name: 'SUBRIF',
         avatar: '/imgs/users/2.webp',
         youtubeId: 'DipTYNQAVCQ',
         description: 'Ayyyy y’all are too kind. But I took the HAPEBEAST promo video, and redid it - lmk if you like it I made the beat, and edited the video ☺️',
         time: '22 min ago',
         style: 'house'
      },
      {
         name: 'P.L.S.',
         avatar: '/imgs/users/5.webp',
         youtubeId: 'IqnlGElut6E',
         description: 'THE ONLY HAPE BEAST IS THE LOYAL HAPE BEAST!',
         time: '22 min ago',
         style: 'house'
      },
      {
         name: 'papajams',
         avatar: '/imgs/users/10.webp',
         youtubeId: 'P56HP7EoSSI',
         description: 'Ssending love team! The best is yet to come',
         time: '22 min ago',
         style: 'house'
      },
      {
         name: 'Sid-Art ',
         avatar: '/imgs/users/6.webp',
         youtubeId: 'nApK_HWz3i4',
         description: 'Sharing again my fan music of Hape Beast called \'We Hape\'! Hope you all like it! 🙂 We Hape! And We Coming For you! ',
         time: '22 min ago',
         style: 'house'
      }
   ]
   const [postLiked, setPostLiked] = useState([0, 0, 0, 0, 0, 0])

   const likePost = (index: number) => {
      const newLikes = [...postLiked]
      newLikes[index] == 0 ? newLikes[index] = 1 : newLikes[index] = 0
      setPostLiked(newLikes)
   }
  return (

<div className={styles.middleSidebarBottom}>
   <div className={styles.middleSidebarLeft}>
      <div className={styles.row}>
         <div className={styles.colLg10}>

         {musics.map((music, index) => { return (
         <motion.div key={index} className={styles.card} initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{
             type: "spring",
             duration: 1,
             delay: 0.5
         }}>
               <div className={styles.cardBodyP0}>
                  <figure className={styles.postAvatar}><img src={music.avatar} alt="avater"/></figure>
                  <h4 className={styles.postName}> {music.name} <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> {music.time}</span></h4>
                  <div className={styles.pointer}>
                    <i className="fas fa-ellipsis-h"></i>
                   </div>
               </div>

               <div className={styles.cardBodyP0}>
                     <iframe className={styles.video} src={`https://www.youtube.com/embed/${music.youtubeId}`}></iframe>
                </div> 

               <div className={styles.cardBodyP0}>
                  <p className={styles.postText}>{music.description} <a href="/defaultvideo" className={styles.seeMore}>See more</a></p>
               </div>
               <div className={`${styles.cardBodyP0} ${styles.marginTop}`}>
                    <div className={styles.emojis}>
                    <motion.span onClick={() => likePost(index)} className={`${styles.hEmoji} ${postLiked[index] == 1 ? styles.selected : ''}`}
                     key={postLiked[index]} initial={{ scale: 1 }} animate={{ scale: [1, 5, 1] }}
                     transition={{
                        type: "ease",
                        duration: 0.2,
                     }}>H</motion.span>
                    <span className={styles.emojiText}>2.8K Haped</span>
                 </div>
                  <a href="/#" className={styles.emojis}>
                    <span className="lnr lnr-bubble"></span>
                    <span className={styles.emojiText}>22 Comment</span>
                </a>
                  
                  <div className={`${styles.emojis} ${styles.left}`}>
                    <span className="lnr lnr-location"></span>
                    <span className={styles.emojiText}>Share</span>
                    </div>
               </div>
         </motion.div>
         )})}

         <Loading />
         </div>
      </div>
   </div>
</div>
  )
}

export default Music