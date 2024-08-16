'use client'

import { AlchemyAccountProvider, AlchemyAccountsProviderProps } from '@alchemy/aa-alchemy/react'
import { PropsWithChildren } from 'react'
import { config, queryClient } from '@/config'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Alchemy, Network, AssetTransfersCategory } from 'alchemy-sdk';

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
  console.log('got called')
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

export async function scanQR(data: any) {
  console.log('🚀 ~ scanQR ~ data:', data)
  const url = '/api/rpc/scanqr'
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ qrcode: data }),
    })
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error scanning QR:', error)
  }
}

export async function getUSDCBalance(address: string): Promise<string> {
  const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: Network.BASE_SEPOLIA,
  };
  const alchemy = new Alchemy(settings);

  const usdcAddress = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';

  try {
    const balance = await alchemy.core.getTokenBalances(address, [usdcAddress]);
    const usdcBalance = balance.tokenBalances[0].tokenBalance;
    
    // Convert from wei to USDC (6 decimal places)
    const formattedBalance = (parseInt(usdcBalance || '0') / 1e6).toFixed(2);
    return formattedBalance;
  } catch (error) {
    console.error('Error fetching USDC balance:', error);
    return '0.00';
  }
}

export async function getUSDCTransferHistory(address: string): Promise<any[]> {
  const settings = {
    apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    network: Network.BASE_SEPOLIA,
  };
  const alchemy = new Alchemy(settings);

  const usdcAddress = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';

  try {
    const transfers = await alchemy.core.getAssetTransfers({
      fromBlock: "0x0",
      toAddress: address,
      contractAddresses: [usdcAddress],
      category: [AssetTransfersCategory.ERC20],
    });

    return transfers.transfers;
  } catch (error) {
    console.error('Error fetching USDC transfer history:', error);
    return [];
  }
}

// [!endregion providers]