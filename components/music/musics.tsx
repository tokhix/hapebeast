import type { NextPage } from 'next'
import styles from '../../styles/Musics.module.css'
import Loading from '../Jungle/Loading'

const Music: NextPage = () => {

  return (

<div className={styles.middleSidebarBottom}>
   <div className={styles.middleSidebarLeft}>
      <div className={styles.row}>
         <div className={styles.colLg10}>
         <div className={styles.card}>
               <div className={styles.cardBodyP0}>
                  <figure className={styles.postAvatar}><img src="/imgs/000.jpg" alt="avater"/></figure>
                  <h4 className={styles.postName}> Surfiya Zakir <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> 22 min ago</span></h4>
                  <div className={styles.pointer}>
                    <i className="fas fa-ellipsis-h"></i>
                   </div>
               </div>
               <div className={styles.cardBodyP0}>
                  <p className={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. <a href="/defaultvideo" className={styles.seeMore}>See more</a></p>
               </div>
               <div className={`${styles.cardBodyP0} ${styles.marginTop}`}>
                    <div className={styles.emojis}>
                    <img src="/icon.jpg" alt="" />
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


            {/* <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
               <div className="card-body p-0 d-flex">
                  <figure className="avatar me-3"><img src="assets/images/user-7.png" alt="video" className="shadow-sm rounded-circle w45"></figure>
                  <h4 className="fw-700 text-grey-900 font-xssss mt-1"> Hurin Seary <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> 4 hours</span></h4>
                  <a href="/defaultvideo" className="ms-auto"><i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
               </div>
               <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                  <div className="video-react-controls-enabled video-react-paused video-react-fluid video-react-user-inactive video-react-workinghover video-react" role="region" tabindex="-1" style="padding-top: 56.25%;">
                     <video className="video-react-video" preload="auto" poster="assets/images/poster-2.png" src="assets/images/v-1.mp4" tabindex="-1"></video>
                     <div className="video-react-poster" style="background-image: url(&quot;assets/images/poster-2.png&quot;);"></div>
                     <div className="video-react-loading-spinner"></div>
                     <button className="video-react-big-play-button video-react-big-play-button-left" type="button" aria-live="polite" tabindex="0"><span className="video-react-control-text">Play Video</span></button>
                     <div className="video-react-control-bar video-react-control-bar-auto-hide">
                        <button className="video-react-play-control video-react-control video-react-button video-react-paused" type="button" tabindex="0"><span className="video-react-control-text">Play</span></button>
                        <div className="video-react-volume-menu-button-horizontal video-react-vol-3 video-react-volume-menu-button video-react-menu-button-inline video-react-control video-react-button video-react-menu-button" role="button" tabindex="0">
                           <div className="video-react-menu">
                              <div className="video-react-menu-content">
                                 <div className="video-react-volume-bar video-react-slider-bar video-react-slider-horizontal video-react-slider" tabindex="0" role="slider" aria-label="volume level" aria-valuenow="100.00" aria-valuetext="100.00%" aria-valuemin="0" aria-valuemax="100">
                                    <div className="video-react-volume-level" style="width: 100%;"><span className="video-react-control-text"></span></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="video-react-current-time video-react-time-control video-react-control">
                           <div className="video-react-current-time-display" aria-live="off"><span className="video-react-control-text">Current Time </span>0:00</div>
                        </div>
                        <div className="video-react-time-control video-react-time-divider" dir="ltr">
                           <div><span>/</span></div>
                        </div>
                        <div className="video-react-duration video-react-time-control video-react-control">
                           <div className="video-react-duration-display" aria-live="off"><span className="video-react-control-text">Duration Time </span>0:20</div>
                        </div>
                        <div className="video-react-progress-control video-react-control">
                           <div className="video-react-progress-holder video-react-slider-horizontal video-react-slider" tabindex="0" role="slider" aria-label="video progress bar" aria-valuenow="0.00" aria-valuetext="0:00" aria-valuemin="0" aria-valuemax="100">
                              <div className="video-react-load-progress" style="width: 84.8388%;">
                                 <span className="video-react-control-text">Loaded: 0%</span>
                                 <div style="left: 0%; width: 100%;"></div>
                              </div>
                              <div data-current-time="0:00" className="video-react-play-progress video-react-slider-bar" style="width: 0%;"><span className="video-react-control-text">Progress: 0.00%</span></div>
                           </div>
                        </div>
                        <button className="video-react-icon-fullscreen video-react-fullscreen-control video-react-control video-react-button video-react-icon" type="button" tabindex="0"><span className="video-react-control-text">Non-Fullscreen</span></button>
                     </div>
                  </div>
               </div>
               <div className="card-body p-0 me-lg-5">
                  <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus <a href="/defaultvideo" className="fw-600 text-primary ms-2">See more</a></p>
               </div>
               <div className="card-body d-flex p-0 mt-3"><a href="/defaultvideo" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="/defaultvideo" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><a href="/defaultvideo" className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span className="d-none-xs">Share</span></a></div>
            </div>
            <div className="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-3">
               <div className="card-body p-0 d-flex">
                  <figure className="avatar me-3"><img src="assets/images/user-9.png" alt="video" className="shadow-sm rounded-circle w45"></figure>
                  <h4 className="fw-700 text-grey-900 font-xssss mt-1"> Anthony Daugloi <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500"> 6 hours</span></h4>
                  <a href="/defaultvideo" className="ms-auto"><i className="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a>
               </div>
               <div className="card-body p-0 mb-3 rounded-3 overflow-hidden">
                  <div className="video-react-controls-enabled video-react-paused video-react-fluid video-react-user-active video-react-workinghover video-react" role="region" tabindex="-1" style="padding-top: 56.25%;">
                     <video className="video-react-video" preload="auto" poster="assets/images/poster-3.png" src="assets/images/v-4.mp4" tabindex="-1"></video>
                     <div className="video-react-poster" style="background-image: url(&quot;assets/images/poster-3.png&quot;);"></div>
                     <div className="video-react-loading-spinner"></div>
                     <button className="video-react-big-play-button video-react-big-play-button-left" type="button" aria-live="polite" tabindex="0"><span className="video-react-control-text">Play Video</span></button>
                     <div className="video-react-control-bar video-react-control-bar-auto-hide">
                        <button className="video-react-play-control video-react-control video-react-button video-react-paused" type="button" tabindex="0"><span className="video-react-control-text">Play</span></button>
                        <div className="video-react-volume-menu-button-horizontal video-react-vol-3 video-react-volume-menu-button video-react-menu-button-inline video-react-control video-react-button video-react-menu-button" role="button" tabindex="0">
                           <div className="video-react-menu">
                              <div className="video-react-menu-content">
                                 <div className="video-react-volume-bar video-react-slider-bar video-react-slider-horizontal video-react-slider" tabindex="0" role="slider" aria-label="volume level" aria-valuenow="100.00" aria-valuetext="100.00%" aria-valuemin="0" aria-valuemax="100">
                                    <div className="video-react-volume-level" style="width: 100%;"><span className="video-react-control-text"></span></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="video-react-current-time video-react-time-control video-react-control">
                           <div className="video-react-current-time-display" aria-live="off"><span className="video-react-control-text">Current Time </span>0:00</div>
                        </div>
                        <div className="video-react-time-control video-react-time-divider" dir="ltr">
                           <div><span>/</span></div>
                        </div>
                        <div className="video-react-duration video-react-time-control video-react-control">
                           <div className="video-react-duration-display" aria-live="off"><span className="video-react-control-text">Duration Time </span>0:15</div>
                        </div>
                        <div className="video-react-progress-control video-react-control">
                           <div className="video-react-progress-holder video-react-slider-horizontal video-react-slider" tabindex="0" role="slider" aria-label="video progress bar" aria-valuenow="0.00" aria-valuetext="0:00" aria-valuemin="0" aria-valuemax="100">
                              <div className="video-react-load-progress" style="width: 100%;">
                                 <span className="video-react-control-text">Loaded: 0%</span>
                                 <div style="left: 0%; width: 100%;"></div>
                              </div>
                              <div data-current-time="0:00" className="video-react-play-progress video-react-slider-bar" style="width: 0%;"><span className="video-react-control-text">Progress: 0.00%</span></div>
                           </div>
                        </div>
                        <button className="video-react-icon-fullscreen video-react-fullscreen-control video-react-control video-react-button video-react-icon" type="button" tabindex="0"><span className="video-react-control-text">Non-Fullscreen</span></button>
                     </div>
                  </div>
               </div>
               <div className="card-body p-0 me-lg-5">
                  <p className="fw-500 text-grey-500 lh-26 font-xssss w-100 mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus <a href="/defaultvideo" className="fw-600 text-primary ms-2">See more</a></p>
               </div>
               <div className="card-body d-flex p-0 mt-3"><a href="/defaultvideo" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss me-3"><i className="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i className="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a><a href="/defaultvideo" className="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-message-circle text-dark text-grey-900 btn-round-sm font-lg"></i>22 Comment</a><a href="/defaultvideo" className="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"><i className="feather-share-2 text-grey-900 text-dark btn-round-sm font-lg"></i><span className="d-none-xs">Share</span></a></div>
            </div>
            <div className="card w-100 text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
               <div className="snippet mt-2 ms-auto me-auto" data-title=".dot-typing">
                  <div className="stage">
                     <div className="dot-typing"></div>
                  </div>
               </div>
            </div> */}
         </div>
      </div>
   </div>
</div>
  )
}

export default Music