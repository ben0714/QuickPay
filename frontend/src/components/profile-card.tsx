'use client'

import React, { FormEvent, useState } from 'react'
import { useAccount, useLogout, useSendUserOperation, useSmartAccountClient, useUser } from '@alchemy/aa-alchemy/react'
import { chain, accountType, gasManagerConfig, accountClientOptions as opts } from '@/config'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Hex } from 'viem'
import { OpStatus } from './op-status'
import Header from './ui/header'
import TransactionList from './ui/transaction'
import { useQuery } from '@tanstack/react-query'
import { getEthToUsdRate } from '@/app/providers'
import QrScanner from './ui/qr-scanner'

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
  const address_temp = '0x5FA2f3b42db545B11977BDC82a7A98e30A285EE2'

  const { logout } = useLogout()

  // [!region sending-user-op]
  // use config values to initialize our smart account client
  const { client } = useSmartAccountClient({
    type: accountType,
    gasManagerConfig,
    opts,
  })

  // provide the useSendUserOperation with a client to send a UO
  // this hook provides us with a status, error, and a result
  const { sendUserOperation, sendUserOperationResult, isSendingUserOperation, error: isSendUserOperationError } = useSendUserOperation({ client, waitForTxn: true })

  const send = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    // collect all the form values from the user input
    const formData = new FormData(evt.currentTarget)
    const target = formData.get('to') as Hex
    const data = formData.get('data') as Hex
    const value = formData.get('value') as string

    // send the user operation
    sendUserOperation({
      uo: { target, data, value: value ? BigInt(value) : 0n },
    })
  }
  // [!endregion sending-user-op]

  return (
    <div className="bg-primary-blue min-h-screen w-full gap-3">
      {isScan ? (
        <QrScanner hideCamera={() => setIsScan(false)} />
      ) : (
        <div className="flex flex-col gap-3 ">
          <Header address={address_temp || ''} rate={data} onClick={() => setIsScan(true)} />
          <TransactionList address={address_temp || ''} rate={data} />
        </div>
      )}
    </div>
  )
}
