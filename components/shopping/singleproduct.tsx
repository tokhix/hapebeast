import type { NextPage } from 'next'
import styles from '../../styles/Product.module.css'

const SingleProduct: NextPage = () => {

  return (

<div className={styles.middleSidebarBottom}>
   <div className={styles.middleSidebarLeft}>
      <div className={styles.row}>
         <div className={styles.productLeft}>
             <img src="/imgs/posts/product1.webp" alt="product"/>
             <img src="/imgs/posts/product2.webp" alt="product"/>
             <img src="/imgs/posts/product3.webp" alt="product"/>
             <img src="/imgs/posts/product4.webp" alt="product"/>
        </div>
         <div className={styles.productMiddle}>
            <div className={styles.slickSlider} dir="ltr">
               <button type="button" className={styles.slickPrev}>
                  <span className="lnr lnr-chevron-left"></span>
               </button>
               <div className={styles.slickList}>
                  <div className={styles.slickTrack}>
                     <div className={styles.slickSlide} aria-hidden="true" style={{width: 383}}>
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product3.webp" alt="avater"/></div>
                        </div>
                     </div>
                     <div className={styles.slickSlide} style={{width: 383}} aria-hidden="false" >
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product4.webp" alt="avater" /></div>
                        </div>
                     </div>
                     <div className={styles.slickSlide} style={{width: 383}} aria-hidden="true">
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product1.webp" alt="avater" /></div>
                        </div>
                     </div>
                     <div className={styles.slickSlide} style={{width: 383}}  aria-hidden="true">
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product2.webp" alt="avater" /></div>
                        </div>
                     </div>
                     <div className={styles.slickSlide} style={{width: 383}}  aria-hidden="true">
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product3.webp" alt="avater" /></div>
                        </div>
                     </div>
                     <div className={styles.slickSlide} style={{width: 383}}  aria-hidden="true">
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product4.webp" alt="avater" /></div>
                        </div>
                     </div>
                     <div className={styles.slickSlide} style={{width: 383}}  aria-hidden="true">
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product1.webp" alt="avater" /></div>
                        </div>
                     </div>
                     <div className={styles.slickSlide} style={{width: 383}}  aria-hidden="true">
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product2.webp" alt="avater" /></div>
                        </div>
                     </div>
                     <div className={styles.slickSlide} style={{width: 383}}  aria-hidden="true">
                        <div>
                           <div className={styles.slideImg}><img src="/imgs/posts/product3.webp" alt="avater" /></div>
                        </div>
                     </div>
                  </div>
               </div>
               <button type="button" data-role="none" className={styles.slickNext}>
                  <span className="lnr lnr-chevron-right"></span>
               </button>
               {/* <ul className={styles.slickDots}>
                  <li className={styles.slickActive}><button>1</button></li>
                  <li className=""><button>2</button></li>
                  <li className=""><button>3</button></li>
                  <li className=""><button>4</button></li>
               </ul> */}
            </div>
         </div>
         <div className={styles.productRight}>
            <h4>COLLAB</h4>
            <h2> Nike X Hape White Hoodie</h2>
            <div className={styles.stars}>
                <img src="/imgs/posts/star.png" alt="star"/>
                <img src="/imgs/posts/star.png" alt="star"/>
                <img src="/imgs/posts/star.png" alt="star"/>
                <img src="/imgs/posts/star.png" alt="star"/>
                <img src="/imgs/posts/star-disable.png" alt="star"/>
            </div>
            <p className={styles.reviewLink}> 2 customer review</p>
            <p className={styles.productDescription}>ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
            <h6><span className={styles.fontXl}>$</span>449 <span className={styles.fontXs}>$699</span></h6>
            <div className={styles.timer}>
               <div className={styles.timeCount}><span className={styles.textTime}>03</span> <span className={styles.textDay}>Day</span></div>
               <div className={styles.timeCount}><span className={styles.textTime}>03</span> <span className={styles.textDay}>Hours</span> </div>
               <div className={styles.timeCount}><span className={styles.textTime}>55</span> <span className={styles.textDay}>Min</span> </div>
               <div className={styles.timeCount}><span className={styles.textTime}>48</span> <span className={styles.textDay}>Sec</span> </div>
            </div>
            <form className={styles.form}>
               <div className={styles.productAction}>
                  <div className={styles.quantity}>
                     <input  type="number" className={styles.quantityInput} name="qty" id="qty" value="1" min="1" />
                     <div className={styles.dec}>-</div>
                     <div className={styles.inc}>+</div>
                  </div>
                  <a href="/#" className={styles.addToCart}>Add to cart</a>
               </div>
            </form>
            <ul className={styles.productFeature}>
               <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900"> Category : </b>Fashion</li>
               <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">Straight fit</li>
               <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900">SKU : </b> REF. LA-107</li>
               <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">Dry clean</li>
               <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left"><b className="text-grey-900">Tags : </b>Design, Toys</li>
               <li className="w-50 lh-32 font-xsss text-grey-500 fw-500 float-left">Cutton shirt</li>
            </ul>
         </div>
      </div>
   </div>
</div>
  )
}

export default SingleProduct