import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { getShortAddress } from '../../utils/nftAddress'
const NFTDropPage = () => {
  // authorize
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen ">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="lg:w-92; w-44 rounded-xl object-cover lg:h-96"
              src="https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">DEMO NFT MARKET</h1>
            <h2 className="text-xl text-gray-300">
              A collection of bla bl ablabla
            </h2>
          </div>
        </div>
      </div>

      {/* right */}

      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex w-full items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            THE{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              DEMO NFT MARKET PLACE
            </span>
          </h1>
          <button
            onClick={() => {
              address ? disconnect() : connectWithMetamask()
            }}
            className="rounded-full bg-rose-400 px-4 py-2 text-white lg:px-5 lg:py-3 lg:text-base "
          >
            {address ? 'Sign out ' : 'Sign in'}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            You're logged in with wallet {getShortAddress(address)}
          </p>
        )}
        {/* content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src="https://links.papareact.com/bdy"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            The DEMO site codding Club | NFT DROP
          </h1>
          <p className="pt-4 text-xl text-green-500">13 / 212 NFT's claimed</p>
        </div>
        {/* mint button */}
        <button className="h-16 w-full rounded-full bg-red-600 font-bold text-white">
          Mint NFT (0.01 ETH){' '}
        </button>
      </div>
      {/* right */}
    </div>
  )
}

export default NFTDropPage
