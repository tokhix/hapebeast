import type { NextPage } from 'next'
import Feed from '../components/Jungle/Feed'
import Layout from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Feed />
    </Layout>
  )
}

export default Home
