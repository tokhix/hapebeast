import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Dressing from '../components/dressing/Dressing'
import Header from '../components/Nav/header'
import Layout from '../components/Layout/Layout'

const Dressup: NextPage = () => {
  return (
    <Layout>
      <Dressing />
    </Layout>
  )
}

export default Dressup
