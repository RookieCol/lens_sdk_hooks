"use client";

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { polygonMumbai } from 'viem/chains'

if (!process.env.NEXT_PUBLIC_WC_ID) {
    throw new Error('NEXT_PUBLIC_WC_ID env variable not set')
}

const projectId = process.env.NEXT_PUBLIC_WC_ID;

const metadata = {
    name: 'Lens SDK app',
    description: 'Lens SDK project',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [polygonMumbai]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export function Web3Modal({ children }: { children: React.ReactNode }) {
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}