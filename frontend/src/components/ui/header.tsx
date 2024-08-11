import React from 'react'
import { useAccount, useLogout, useSendUserOperation, useSmartAccountClient, useUser } from '@alchemy/aa-alchemy/react'
import { chain, accountType, gasManagerConfig, accountClientOptions as opts } from '@/config'
import { Button } from './button'
import Image from 'next/image'
import qrImage from '../../../public/qr.png' // Adjust the path according to your file structureimport qrImage from '../../../public/qr.png'; // Adjust the path according to your file structure
import { getTransactionHistory, getEthToUsdRate } from '@/app/providers'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { formatValueInUsd } from '@/utils'
import Link from 'next/link'

interface HeaderProps {
  address: string
  rate: any
  onClick: () => void
}

const Header: React.FC<HeaderProps> = ({ address, rate, onClick }) => {
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery({ queryKey: ['balance'], queryFn: () => getTransactionHistory(address, 'balance') })
  const balance = formatValueInUsd(data, rate)

  return (
    <div className="">
      <div className="pt-12 pb-4 px-4 flex flex-col bg-white gap-8 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <img src="https://avatars.githubusercontent.com/u/77936727?v=4" alt="profile" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="text-base font-medium">{address?.substring(0, 20) + '...'} </span>
            <span className="text-xs text-gray-500">Welcome Back</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-500">Total Balance</h1>
          <h1 className="text-4xl font-medium">$ {balance}</h1>
        </div>

        <Button onClick={() => onClick()}>
          <div className="flex items-center justify-center gap-2">
            <Image src={qrImage} alt="scan qr" width={24} height={24} />
            <span>Scan QR</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Header
