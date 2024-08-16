// @ts-nocheck
'use client'

// src/components/QrScanner.tsx
import { useEffect, useState, useRef } from 'react'
import { Modal } from 'antd'
import dynamic from 'next/dynamic'
import { useQuery } from '@tanstack/react-query'
import { Button } from './button'
import Header from '@/components/ui/header'
import { scanQR } from '@/app/providers'
import QRScannerComponent from './qr-reader'
import { LoadingSpinner } from './loading-spinner'
import { CSSTransition } from 'react-transition-group'
import checkCircle from '../../../public/check-circle-filled.png'
import Image from 'next/image'
import { useSmartAccountClient, useSendUserOperation } from '@alchemy/aa-alchemy/react'
import { encodeFunctionData } from 'viem'

const QUICKPAY_ADDRESS = '0x09632aC438fefDb34edfCEF94A38F7e10eCBCc2C'
const QUICKPAY_ABI = [
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'assets', type: 'uint256' },
      { internalType: 'string', name: 'memo', type: 'string' }
    ],
    name: 'receivePayment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
] as const

interface QrScannerProps {
  hideCamera: any
}

export default function QrScanner({ hideCamera }: QrScannerProps) {
  const [isScanned, setIsScanned] = useState(false)
  const [qrResult, setQrResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const [successLoading, setSuccessLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [transactionError, setTransactionError] = useState<string | null>(null)

  const { client } = useSmartAccountClient({
    type: "MultiOwnerModularAccount",
  });

  const { sendUserOperation, isSendingUserOperation } = useSendUserOperation({
    client,
    onSuccess: ({ hash, request }) => {
      console.log('User operation sent successfully', hash, request)
      setSuccessLoading(false)
      setIsSuccess(true)
    },
    onError: (error) => {
      console.error('Error sending user operation:', error)
      setTransactionError('Transaction failed. Please try again.')
      setSuccessLoading(false)
    },
  });

  const hideCameraAfterDelay = async () => {
    if (!client || !qrResult?.data) return;

    setSuccessLoading(true)
    try {
      const callData = encodeFunctionData({
        abi: QUICKPAY_ABI,
        functionName: 'receivePayment',
        args: [
          BigInt(qrResult.data.usdc_amount * 1e6), // Convert to USDC decimals
          BigInt(qrResult.data.amount * 1e18), // Convert to MNT decimals
          qrResult.data.bank_code || ''
        ],
      });

      await sendUserOperation({
        uo: {
          target: QUICKPAY_ADDRESS,
          data: callData,
        },
      });
    } catch (error) {
      console.error('Failed to send user operation:', error)
      setTransactionError('Failed to send transaction. Please try again.')
      setSuccessLoading(false)
    }
  }

  const handleQr = async (qrdata: any) => {
    setIsLoading(true)
    const data = await scanQR(qrdata)
    setIsLoading(false)
    setQrResult(data)
  }

  const handleScan = async (qrData: any) => {
    if (qrData) {
      setIsScanned(true)
      try {
        handleQr(qrData)
      } catch (error) {
        console.error('Request failed:', error)
      }
    }
  }

  const handleClickOutside = (event: React.MouseEvent) => {
    const modal = document.getElementById('modal')
    if (modal && !modal.contains(event.target as Node)) {
      setIsScanned(false)
    }
  }

  const getSuccess = () => {
    return (
      <div className="flex flex-col items-center justify-center text-white gap-4 w-full h-full">
        {successLoading && (
          <div>
            <LoadingSpinner />
            <h1>Confirming transaction</h1>
          </div>
        )}

        {isSuccess && (
          <div className="flex flex-col items-center justify-between w-full h-full">
            <Image src={checkCircle} alt="successicon" width={60} height={60} />
            <h1 className="font-medium text-xl text-center">Success!</h1>

            <p className="text-center text-gray-500">You've successfully completed your transaction</p>
            <p onClick={hideCamera}>Back to home {'->'}</p>
          </div>
        )}
      </div>
    )
  }

  const getTransactionDetails = () => {
    return (
      <div className="flex flex-col text-white gap-4 justfiy-between">
        <h1 className="text-center text-2xl font-medium">$ {qrResult?.data?.usdc_amount}</h1>
        <div>
          <h1>MNT amount</h1>
          <h1 className="text-gray-500">₮ {qrResult?.data?.amount}</h1>
        </div>
        <div>
          <h1>Bank code</h1>
          <h1 className="text-gray-500">{qrResult?.data?.bank_code}</h1>
        </div>
        <div>
          <h1>Account number</h1>
          <h1 className="text-gray-500">{qrResult?.data?.account_num}</h1>
        </div>

        {transactionError && <p className="text-red-500">{transactionError}</p>}
        <Button onClick={hideCameraAfterDelay} disabled={isSendingUserOperation || !client}>
          {isSendingUserOperation ? 'Processing...' : 'Confirm'}
        </Button>
      </div>
    )
  }

  return (
    <>
      <CSSTransition in={isScanned} timeout={300} classNames="modal" unmountOnExit>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={handleClickOutside}>
          <div id="modal" className="bg-primary-blue rounded-lg shadow-lg w-4/5 aspect-square max-w-md p-6 relative">
            {isLoading && <LoadingSpinner />}
            {!successLoading && isSuccess === false ? getTransactionDetails() : getSuccess()}
          </div>
        </div>
      </CSSTransition>

      <div className="flex flex-col bg-primary-blue min-h-screen w-full items-center p-8">
        <div className="p-4 w-full flex items-center text-white relative">
          <h1 onClick={hideCamera} className="text-white text-lg absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
            {'<-'}
          </h1>
          <div className="flex-grow text-center">Scan QR code</div>
        </div>

        <div className="w-full flex items-center justify-center relative overflow-hidden flex-grow p-4">
          <QRScannerComponent handleScan={handleScan} isScanning={!isScanned} />
        </div>
      </div>
    </>
  )
}