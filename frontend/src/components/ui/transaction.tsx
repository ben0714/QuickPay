import React from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getUSDCTransferHistory, getEthToUsdRate } from '@/app/providers'
import { LoadingSpinner } from './loading-spinner'
import incomeIcon from '../../../public/coins-hand.png'
import outcomeIcon from '../../../public/building.png'
import Image from 'next/image'
import { formatValueInUsd } from '@/utils'

interface TransactionListProps {
  address: string
  rate: any
}

const TransactionList: React.FC<TransactionListProps> = ({ address, rate }) => {
  const { data, isLoading, error } = useQuery({ queryKey: ['usdcTransferHistory'], queryFn: () => getUSDCTransferHistory(address) })

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <div className="text-white p-4">No transaction found</div>
  }

  return (
    <div className="text-white p-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="text-lg">Transactions:</p>
        <p className="opacity-40">See detail {'->'} </p>
      </div>
      <ul>
        {data?.slice(0, 10)?.map((tx: any, index: any) => {
          const isIncoming = tx.to.toLowerCase() === address.toLowerCase()
          const transactionType = isIncoming ? 'income' : 'outcome'
          return (
            <div className="py-2" key={index}>
              <TransactionComponent key={index} type={transactionType} amount={tx.value} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}

type TransactionType = 'income' | 'outcome'

interface Transaction {
  type: TransactionType
  amount: string
}

const TransactionComponent: React.FC<Transaction> = ({ type, amount }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-gray-800 rounded-full ">
          <Image src={type === 'income' ? incomeIcon : outcomeIcon} alt="transaction icon" width={24} height={24} />
        </div>
        <div className="flex flex-col gap1">
          <h1>{type === 'income' ? 'Income' : 'Outcome'}</h1>
          <p className="text-xs text-gray-500">Transactions</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 items-end">
        <p className={type === 'income' ? 'text-green-500' : 'text-red-500'}>
          {type === 'income' ? '+' : '-'} {amount}$
        </p>
        <p className="text-xs text-gray-500">Transfer</p>
      </div>
    </div>
  )
}

export default TransactionList
