'use client'
import Image from 'next/image'
import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function Home() {
  const { open } = useWeb3Modal()

  return (
    <>
      <button 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => open()}>
        Open Connect Modal
      </button>
      <button 
        className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4'
        onClick={() => open({ view: 'Networks' })}>
        Open Network Modal
      </button>
    </>
  )
}
