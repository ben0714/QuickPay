'use client'

import { AlchemyAccountProvider, AlchemyAccountsProviderProps } from '@alchemy/aa-alchemy/react'
import { PropsWithChildren } from 'react'
import { config, queryClient } from '@/config'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'

// [!region providers]
export const Providers = ({
  initialState,
  children,
}: PropsWithChildren<{
  initialState?: AlchemyAccountsProviderProps['initialState']
}>) => {
  // providers:
  // 1. theme provider makes it easy to switch between light and dark mode
  // 2. alchemy account provider gives us access to react hooks everywhere
  return (
    <QueryClientProvider client={queryClient}>
      <AlchemyAccountProvider config={config} queryClient={queryClient} initialState={initialState}>
        {children}
      </AlchemyAccountProvider>
    </QueryClientProvider>
  )
}

export async function getEthToUsdRate(): Promise<number> {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
  const data = await response.json()
  return data.ethereum.usd
}

export async function getTransactionHistory(address: string, action: string) {
  const url = `/api/rpc/blockscout?address=${address}&action=${action}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.status === '1') {
      return data.result
    } else {
      console.error('Error fetching transaction history:', data.message)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}

// [!endregion providers]
