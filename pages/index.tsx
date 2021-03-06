import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NFTDropPage from './nft/[id]'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl text-red-400">Welcome to NFT DROP</h1>
    </div>
  )
}

export default Home
