import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/SideBar.module.css'

const Sidebar: NextPage = () => {

  return (
    <div className={styles.sidebar}>
        {/* <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
            <div className="card-body d-flex align-items-center p-4">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">Friend Request</h4>
                <a href="/defaultmember" className="fw-600 ms-auto font-xssss text-primary">See all</a>
            </div>
            <div className="wrap">
                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0">
                    <figure className="avatar me-3"><img src="assets/images/user-7.png" alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">Anthony Daugloi <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">12 mutual friends</span></h4>
                </div>
                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4"><a href="/defaultmember" className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</a><a href="/defaultmember" className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl">Delete</a></div>
            </div>
            <div className="wrap">
                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0">
                    <figure className="avatar me-3"><img src="assets/images/user-8.png" alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">Mohannad Zitoun <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">18 mutual friends</span></h4>
                </div>
                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4"><a href="/defaultmember" className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</a><a href="/defaultmember" className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl">Delete</a></div>
            </div>
            <div className="wrap">
                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0 bor-0">
                    <figure className="avatar me-3"><img src="assets/images/user-6.png" alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-1">Hurin Seary <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">28 mutual friends</span></h4>
                </div>
                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4"><a href="/defaultmember" className="p-2 lh-20 w100 bg-primary-gradiant me-2 text-white text-center font-xssss fw-600 ls-1 rounded-xl">Confirm</a><a href="/defaultmember" className="p-2 lh-20 w100 bg-grey text-grey-800 text-center font-xssss fw-600 ls-1 rounded-xl">Delete</a></div>
            </div>
        </div> */}

        {/* <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
            <div className="card-body d-flex align-items-center p-4">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">Confirm Friend</h4>
                <a href="/defaultmember" className="fw-600 ms-auto font-xssss text-primary">See all</a>
            </div>
            <div className="card-body bg-transparent-card d-flex p-3 bg-greylight ms-3 me-3 rounded-3 mb-3">
                <figure className="avatar me-2 mb-0"><img src="assets/images/user-4.png" alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-2">Armany Seary <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">45 mutual friends</span></h4>
                <a href="/defaultmember" className="btn-round-sm bg-white ms-auto mt-2"><span className="feather-chevron-right font-xss text-grey-900"></span></a>
            </div>
            <div className="card-body bg-transparent-card d-flex p-3 bg-greylight ms-3 me-3 rounded-3 mb-3">
                <figure className="avatar me-2 mb-0"><img src="assets/images/user-3.png" alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-2">Mohannad Zitoun <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">18 mutual friends</span></h4>
                <a href="/defaultmember" className="btn-round-sm bg-white ms-auto mt-2"><span className="feather-chevron-right font-xss text-grey-900"></span></a>
            </div>
            <div className="card-body bg-transparent-card d-flex p-3 bg-greylight ms-3 me-3 rounded-3 mb-3">
                <figure className="avatar me-2 mb-0"><img src="assets/images/user-2.png" alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                <h4 className="fw-700 text-grey-900 font-xssss mt-2">Hurin Seary <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">28 mutual friends</span></h4>
                <a href="/defaultmember" className="btn-round-sm bg-white ms-auto mt-2"><span className="feather-chevron-right font-xss text-grey-900"></span></a>
            </div>
        </div> */}

        {/* <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
            <div className="card-body d-flex align-items-center p-4">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">Suggest Pages</h4>
                <a href="/defaultmember" className="fw-600 ms-auto font-xssss text-primary">See all</a>
            </div>
            <div className="wrap">
                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0 overflow-hidden  bor-0"><img src="assets/images/g-2.jpg" alt="group" className="img-fluid rounded-xxl mb-2" /></div>
                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4"><a href="/defaultgroup" className="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i className="feather-external-link font-xss me-2"></i> Like Page</a></div>
            </div>
            <div className="wrap">
                <div className="card-body d-flex pt-0 ps-4 pe-4 pb-0 overflow-hidden  bor-0"><img src="assets/images/g-3.jpg" alt="group" className="img-fluid rounded-xxl mb-2" /></div>
                <div className="card-body d-flex align-items-center pt-0 ps-4 pe-4 pb-4"><a href="/defaultgroup" className="p-2 lh-28 w-100 bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i className="feather-external-link font-xss me-2"></i> Like Page</a></div>
            </div>
        </div> */}
        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h4>Events</h4>
                <a href="#">See all</a>
            </div>
            <div className={styles.cardEvent}>
                <div className={styles.cardBg} style={{backgroundColor: '#FE9431'}}>
                    <h4><span>APR</span>13</h4>
                </div>
                <h4 className={styles.eventInfo}>Meeting with clients <span>41 madison ave, floor 24 new work, NY 10010</span> </h4>
            </div>
            <div className={styles.cardEvent} >
                <div className={styles.cardBg} style={{backgroundColor: '#10d876'}}>
                    <h4><span >APR</span>22</h4>
                </div>
                <h4 className={styles.eventInfo}>Developer Programe <span>41 madison ave, floor 24 new work, NY 10010</span> </h4>
            </div>
            <div className={styles.cardEvent}>
                <div className={styles.cardBg} style={{backgroundColor: '#10d876'}}>
                    <h4><span>APR</span>30</h4>
                </div>
                <h4 className={styles.eventInfo}>Aniversary Event <span>41 madison ave, floor 24 new work, NY 10010</span> </h4>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.cardTitle}>
                <h4>Arts</h4>
                <a href="/home">See all</a>
            </div>
            <div className={styles.cardGalery}>
                <div className={styles.galery}>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart1.jpg" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart2.jpg" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart3.jpg" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart4.jpg" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart5.jpg" alt="Portfolio"/>
                    </div>
                    <div className={styles.photo}>
                        <img src="/imgs/posts/fanart6.jpg" alt="Portfolio"/>
                    </div>
                </div>
            </div>
            <div className={styles.moreBtn}><a href="/home"><i className="far fa-share-square"></i> More</a></div>
        </div>
    </div>
  )
}

export default Sidebar