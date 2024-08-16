'use client'

import React, { FormEvent, useEffect, useState } from 'react'
import { useAccount, useLogout, useSendUserOperation, useSmartAccountClient, useUser } from '@alchemy/aa-alchemy/react'
import { chain, accountType, gasManagerConfig, accountClientOptions as opts } from '@/config'
import Header from './ui/header'
import TransactionList from './ui/transaction'
import { useQuery } from '@tanstack/react-query'
import { getEthToUsdRate } from '@/app/providers'
import QrScanner from './ui/qr-scanner'
import { LocalAccountSigner } from '@alchemy/aa-core'
import { encodeFunctionData } from 'viem'

export const ProfileCard = () => {
  const { data } = useQuery({
    queryKey: ['exchange_rate'],
    queryFn: () => getEthToUsdRate(),
    refetchInterval: 1000000,
    refetchOnWindowFocus: false, // Prevent refetch on window focus
  })

  const [isScan, setIsScan] = useState(false)

  const user = useUser()

  const { address } = useAccount({ type: accountType })
  const { client } = useSmartAccountClient({
    type: accountType,
    gasManagerConfig,
    opts,
  })
  console.log(client)

  const { sendUserOperation, sendUserOperationResult, isSendingUserOperation, error: isSendUserOperationError } = useSendUserOperation({ client, waitForTxn: true })

  const send = async () => {
    const AlchemyTokenAbi = [
      {
        inputs: [{ internalType: 'address', name: 'recipient', type: 'address' }],
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ]

    const uoCallData = encodeFunctionData({
      abi: AlchemyTokenAbi,
      functionName: 'mint',
      args: [address],
    })

    const uo = await sendUserOperation({
      uo: {
        target: '0x09632aC438fefDb34edfCEF94A38F7e10eCBCc2C',
        data: uoCallData,
      },
    })
  }

  return (
    <div className="bg-primary-blue min-h-screen w-full gap-3">
      {isScan ? (
        <QrScanner hideCamera={() => setIsScan(false)} />
      ) : (
        <div className="flex flex-col gap-3 ">
          <Header address={address || ''} rate={data} onClick={() => setIsScan(true)} />
          <TransactionList address={address || ''} rate={data} />
        </div>
      )}
    </div>
  )
}
