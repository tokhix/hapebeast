import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Nav/header'
import Communities from '../components/community/Communities'
import Arts from '../components/art/Arts'
import Layout from '../components/Layout/Layout'

const Dressup: NextPage = () => {
  return (
    <Layout>
      <Arts />
    </Layout>
  )
}

export default Dressup
