import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import styles from '../../styles/Shopping.module.css'

const Shopping: NextPage = () => {
   const products = [
      {
         name: 'Arabic Community',
         img: '/imgs/users/0.jpg',
         price: '/imgs/users/1.jpg',
      },
      {
         name: 'French Community',
         img: '/imgs/users/12.jpg',
         price: '/imgs/users/2.jpg',
      },
      {
         name: 'Mental Health',
         img: '/imgs/users/13.jpg',
         price: '/imgs/users/3.jpg',
      },
      {
         name: 'Italian Community',
         img: '/imgs/users/16.jpg',
         price: '/imgs/users/4.jpg',
      },
      {
         name: 'Philippines Community',
         img: '/imgs/users/15.jpg',
         price: '/imgs/users/4.jpg',
      },
      {
         name: 'Sports',
         img: '/imgs/users/14.jpg',
         price: '/imgs/users/4.jpg',
      },
    ]
  return (

<div className={styles.middleSidebarBottom}>
   <div className={styles.middleSidebarLeft}>
      <div className={styles.row}>
         <div className={styles.colXl12}>
            <div className={styles.row}>
               <div className={styles.colLg12}>
                  <motion.div className={styles.bannerWrapper} initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        duration: 1,
                    }}>
                     <div className={styles.slickSlider} dir="ltr">
                        <button type="button" data-role="none" className={styles.slickPrev}> Previous</button>
                        <div className={styles.slickList}>
                           <div className={styles.slickTrack} style={{width: 1920, opacity: 1}}>
                              <div data-index="0" className={styles.slickSlide} aria-hidden="false" style={{outline: 'none', width: 960}}>
                                 <div>
                                    <div className={styles.slickStyle}>
                                       <div className={styles.row}>
                                          <div className={styles.colLg6}>
                                             <div className={styles.card}>
                                                <h4>TRENDING</h4>
                                                <h2>New Arrival Buds <br /> <b className={styles.fw700}>Collection</b></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra.</p>
                                                <a href="/shop" className={styles.shopNow}>Shop Now</a>
                                             </div>
                                          </div>
                                          <div className={styles.shopImg}><img src="http://sociala.uitheme.net/assets/images/pl-22.png" alt="product"/></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div data-index="1" className={styles.slickSlide} aria-hidden="true" style={{outline: 'none', width: 960}}>
                                 <div>
                                    <div className={styles.slickStyle}>
                                       <div className={styles.row}>
                                          <div className={styles.colLg6}>
                                             <div className={styles.card}>
                                                <h4>TRENDING</h4>
                                                <h2>New Arrival Buds <br /> <b className="fw-700">Collection</b></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra.</p>
                                                <a href="/shop2" className={styles.shopNow}>Shop Now</a>
                                             </div>
                                          </div>
                                          <div className={styles.shopImg}><img src="http://sociala.uitheme.net/assets/images/pl-23.png" alt="product"/></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* <button type="button" data-role="none" className="slick-arrow slick-next" style="display: block;"> Next</button>
                        <ul className="slick-dots" style="display: block;">
                           <li className="slick-active"><button>1</button></li>
                           <li className=""><button>2</button></li>
                        </ul> */}
                     </div>
                  </motion.div>
               </div>
               {products.map((product, index) => { return (

               <motion.div className={styles.product} initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                   type: "spring",
                   duration: 1,
                   delay: (index + 1) * 0.1
               }}>
                  <div className={styles.productCard}>
                     <div className={styles.productImg}>
                         <a href="/singleproduct">
                             <img src="http://sociala.uitheme.net/assets/images/pp-9.png" alt="product"/>
                        </a>
                    </div>
                     <div className={styles.productBody}>
                        <h2><a href="/singleproduct">Textured Sleeveless Camisole</a></h2>
                        <h6>$449</h6>
                     </div>
                  </div>
               </motion.div>
               )})}
               <div className={styles.loadMore}><a href="/shop">Load More</a></div>
            </div>
         </div>
      </div>
   </div>
</div>
  )
}

export default Shopping