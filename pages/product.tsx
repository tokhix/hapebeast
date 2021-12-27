import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Nav/header'
import Communities from '../components/community/Communities'
import Arts from '../components/art/Arts'
import Music from '../components/music/musics'
import Shopping from '../components/shopping/shopping'
import SingleProduct from '../components/shopping/singleproduct'
import Layout from '../components/Layout/Layout'

const Product: NextPage = () => {
  return (
    <Layout>
      <SingleProduct />
    </Layout>
  )
}

export default Product
