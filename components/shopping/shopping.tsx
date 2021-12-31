import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../styles/Shopping.module.css'

const Shopping: NextPage = () => {
   const products = [
      {
         name: 'Adidas x Hape Shoe',
         img: '/imgs/users/product1.webp',
         price: '340',
      },
      {
         name: 'Lacost Jacket Black',
         img: '/imgs/users/product2.webp',
         price: '220',
      },
      {
         name: 'Ralph Lauren x Hape Cap',
         img: '/imgs/users/product3.webp',
         price: '90',
      },
      {
         name: 'Nike x Hape Hoodie',
         img: '/imgs/users/product4.webp',
         price: '140',
      },
      {
         name: 'Ralph Lauren x Hape ',
         img: '/imgs/users/product5.webp',
         price: '100',
      },
      {
         name: 'North Face x Hape Jacket',
         img: '/imgs/users/product6.webp',
         price: '320',
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
                        <div className={styles.slickList}>
                           <div className={styles.slickTrack}>
                              <div data-index="0" className={styles.slickSlide} aria-hidden="false">
                                 <div>
                                    <div className={styles.slickStyle}>
                                       <div className={styles.row}>
                                          <div className={styles.colLg6}>
                                             <div className={styles.card}>
                                                <h4>TRENDING</h4>
                                                <h2>New Arrival <br /> <b className={styles.fw700}>Hape Buds</b></h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra.</p>
                                                <a href="/shop" className={styles.shopNow}>Shop Now</a>
                                             </div>
                                          </div>
                                          <div className={styles.shopImg}><img src="/imgs/users/product0.webp" alt="product"/></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
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
                         <Link href="/product">
                             <img src={product.img} alt="product"/>
                        </Link>
                    </div>
                     <div className={styles.productBody}>
                        <h2><a href="/singleproduct">{product.name}</a></h2>
                        <h6>${product.price}</h6>
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