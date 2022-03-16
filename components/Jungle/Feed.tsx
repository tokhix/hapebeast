import { motion } from 'framer-motion'
import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/Feed.module.css'
import Loading from './Loading'
import Sidebar from './Sidebar'

const Feed: NextPage = () => {
   const stories = [
      {
         name: 'Aliqa Macale',
         img: '/imgs/posts/story1.webp',
         avatar: '/imgs/users/1.webp'
      },
      {
         name: 'Aliqa Macale',
         img: '/imgs/posts/story2.webp',
         avatar: '/imgs/users/2.webp'
      },
      {
         name: 'Aliqa Macale',
         img: '/imgs/posts/story3.webp',
         avatar: '/imgs/users/3.webp'
      },
      {
         name: 'Aliqa Macale',
         img: '/imgs/posts/story4.webp',
         avatar: '/imgs/users/4.webp'
      },
    ]
   const [postLiked, setPostLiked] = useState([0, 0, 0])
   

   const likePost = (index: number) => {
      const newLikes = [...postLiked]
      newLikes[index] == 0 ? newLikes[index] = 1 : newLikes[index] = 0
      setPostLiked(newLikes)
   }
  return (
<div className={styles.middleSidebarBottom}>
   <div className={styles.middleSidebarLeft}>
      <div className={styles.feedBody}>
         <div className={styles.colXl8}>

               <div className={styles.slickSlider} dir="ltr">
                  <div className={styles.slickList}>
                     <div className={styles.slickTrack} style={{width: 705, opacity:1}}>
                     <motion.div className={styles.story} initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                           type: "spring",
                           duration: 1,
                        }}>
                           <div>
                              <div className={styles.storyCard} data-bs-toggle="modal" data-bs-target="#Modalstory" tabIndex={-1}>
                                 <div className={styles.storyBody}>
                                    <span className={styles.storyAdd}>
                                       <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </span>
                                    <h4>Add Story </h4>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                        {stories.map((story, index) => { return (

                        <motion.div key={index} className={styles.story} initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                           type: "spring",
                           duration: 1,
                           delay: (index + 1) * 0.1
                        }}>
                           <div>
                              <div tabIndex={-1} >
                                 <div className={styles.storyCard}  style={{backgroundImage: `url('${story.img}')`}}>
                                    <div className={`${styles.storyBody} ${styles.overlay}`}>
                                       <figure className={styles.storyImg}><img src={story.avatar} alt="avater"/></figure>
                                       <h4>{story.name}  </h4>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                        )})}
                        
                     </div>
                  </div>
               </div>
            
            <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                duration: 1,
                delay: 0.5
            }}>
            <div className={styles.card}>
               <div className={styles.cardBodyP0}>
                   <a href="/" className={styles.cardBodyContent}><span className="lnr lnr-pencil"></span>Create Post</a>
                </div>
               <div className={`${styles.cardBodyP0} ${styles.marginTop}`}>
                  <figure className={styles.cardAvatar}><img src="/imgs/users/0.webp" alt="icon"/></figure>
                  <textarea name="message" className={styles.textarea} cols={30} rows={10} placeholder="What's on your mind?" spellCheck="false"></textarea>
               </div>
               <div className={`${styles.cardBodyP0} ${styles.marginTop}`}>
                  <a href="#" className={styles.postVideo}><span className="lnr lnr-camera-video" style={{fontSize: 22, marginRight: 7,color: '#E50202'}}></span><span>Post</span></a>
                  <a href="#" className={styles.postVideo}><span className="lnr lnr-picture" style={{fontSize: 22, marginRight: 7,color: '#10d876'}}></span><span className="d-none-xs">Art</span></a>
                  <a href="#" className={styles.postVideo}><span className="lnr lnr-music-note" style={{fontSize: 22, marginRight: 7,color: '#FE9431'}}></span><span className="d-none-xs">Music</span></a>
               </div>
            </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                duration: 1,
                delay: 1
            }}>
            <div className={styles.card}>
               <div className={`${styles.cardBodyP0} ${styles.marginBottom}`}>
                  <figure className={styles.postAvatar}><img src="/imgs/users/justcarl.webp" alt="avater"/></figure>
                  <h4 className={styles.postName}> JustCarl <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> 22 min ago</span></h4>
                  <div className={styles.pointer}>
                    <i className="fas fa-ellipsis-h"></i>
                   </div>
               </div>
               <div className={styles.cardBodyP0}>
                  <p className={styles.postText}>Hi HAPES<br/>
                  250k…What a journey it’s been so far. <br/>
                  Tomorrow evening European time the announcement you’ve all been waiting for…until then. <br/>
                  Go HAPESHIT and Stay HAPE<br/>
                  TEAM HAPE <a href="/defaultvideo" className={styles.seeMore}>See more</a></p>
               </div>
               <div className={`${styles.cardBodyP0} ${styles.marginTop}`}>
                    <div className={styles.emojis}>
                    <motion.span onClick={() => likePost(0)} className={`${styles.hEmoji} ${postLiked[0] ? styles.selected : ''}`}
                     key={postLiked[0]} initial={{ scale: 1 }} animate={{ scale: [1, 5, 1] }}
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
            </div>
            </motion.div>

            <div className={styles.card}>
               <div className={`${styles.cardBodyP0} ${styles.marginBottom}`}>
                  <figure className={styles.postAvatar}><img src="/imgs/users/6.webp" alt="avater"/></figure>
                  <h4 className={styles.postName}> Fanatic Hape <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> 1 hour ago</span></h4>
                  <div className={styles.pointer}>
                    <i className="fas fa-ellipsis-h"></i>
                   </div>
               </div>
               <div className={styles.cardBodyP0}>
                  <p className={styles.postText}>This is my new HapeBeast decoration for christmas, Hape is part of our family now!  <a href="/defaultvideo" className={styles.seeMore}>#xmas-event</a></p>
               </div>
               <div className={styles.cardBodyP0}>
                    <div className={styles.postImg}><img src="/imgs/posts/christman.webp" className="rounded-3 w-100" alt="post" /></div>
               </div>
               <div className={`${styles.cardBodyP0} ${styles.marginTop}`}>
                    <div className={styles.emojis}>
                    <motion.span onClick={() => likePost(1)} className={`${styles.hEmoji} ${postLiked[1] ? styles.selected : ''}`}
                     key={postLiked[1]} initial={{ scale: 1 }} animate={{ scale: [1, 5, 1] }}
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
            </div>

            <div className={styles.card}>
               <div className={`${styles.cardBodyP0} ${styles.marginBottom}`}>
                  <figure className={styles.postAvatar}><img src="/imgs/users/9.webp" alt="avater"/></figure>
                  <h4 className={styles.postName}> Ferit Kaptan <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> 2 hours ago</span></h4>
                  <div className={styles.pointer}>
                    <i className="fas fa-ellipsis-h"></i>
                   </div>
               </div>
               <div className={styles.cardBodyP0}>
                  <p className={styles.postText}>This was the prep for my hapetureday event. <br/>
To all of you from a rainy day  hello hape community and hape lovers.   🌧️ <br/>
First of all, I am proud to be a part of this wonderful group. Let's take a look at what Hape looks like in nature.🌳 <br/>
I planted 7 taflan plants in the shape of the letter H. I hope you will like it.🌲 <br/>
and here's my surprise. I thought this great community would need a member card and I created a member card design "ID card, vehicle badge and badge" big community big business. <br/>
I will continue to do whatever it takes to support our community and move it forward . 
 <a href="/defaultvideo" className={styles.seeMore}>#hapeventure-day</a></p>
               </div>

               <div className={styles.cardBodyP0}>
                     <iframe className={styles.video} src="https://www.youtube.com/embed/KV1otGdeuc4"></iframe>
                </div> 

               <div className={`${styles.cardBodyP0} ${styles.marginTop}`}>
                    <div className={styles.emojis}>
                    <motion.span onClick={() => likePost(2)} className={`${styles.hEmoji} ${postLiked[2] ? styles.selected : ''}`}
                     key={postLiked[2]} initial={{ scale: 1 }} animate={{ scale: [1, 5, 1] }}
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
            </div>

            <div className={styles.slickSlider} dir="ltr">
               <h2 className={styles.sectinTitle}>Hapes of the day</h2>
               <div className={styles.slickList}>
                  <div className={styles.slickTrack} style={{width: 13230, opacity:1}}>
                     <div data-index="-7" tabIndex={-1}  className={styles.slickSlide} aria-hidden="true">
                        <div>
                           <div className={styles.userCard} style={{width: 200}} tabIndex={-1}>
                              <div className={styles.bgImage} style={{backgroundImage: "url('/imgs/posts/background.webp')"}}></div>
                              <div className={styles.userInfo}>
                                 <figure className={styles.userImg}><img src="/imgs/users/10.webp" alt="avater"/></figure>
                                 <h4>Pic Asso</h4>
                                 <p>Artist of the day</p>
                                 <span>Follow</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-index="-7" tabIndex={-1}  className={styles.slickSlide} aria-hidden="true">
                        <div>
                           <div className={styles.userCard} style={{width: 200}} tabIndex={-1}>
                              <div className={styles.bgImage} style={{backgroundImage: "url('/imgs/posts/background2.webp')"}}></div>
                              <div className={styles.userInfo}>
                                 <figure className={styles.userImg}><img src="/imgs/users/9.webp" alt="avater"/></figure>
                                 <h4>Beat Hoven </h4>
                                 <p>Musician of the day</p>
                                 <span>Follow</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div data-index="-7" tabIndex={-1}  className={styles.slickSlide} aria-hidden="true">
                        <div>
                           <div className={styles.userCard} style={{width: 200}} tabIndex={-1}>
                              <div className={styles.bgImage} style={{backgroundImage: "url('/imgs/posts/background3.webp')"}}></div>
                              <div className={styles.userInfo}>
                                 <figure className={styles.userImg}><img src="/imgs/users/3.webp" alt="avater"/></figure>
                                 <h4>Mamiz Boy </h4>
                                 <p>Memer of the day</p>
                                 <span>Follow</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>


            <Loading />
         </div>
         <Sidebar />


      </div>
   </div>
</div>

  )
}

export default Feed
