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

interface QrScannerProps {
  hideCamera: any
}

export default function QrScanner({ hideCamera }: QrScannerProps) {
  const [isScanned, setIsScanned] = useState(false)
  const [qrResult, setQrResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <>
      <CSSTransition in={isScanned} timeout={300} classNames="modal" unmountOnExit>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={handleClickOutside}>
          <div id="modal" className="bg-primary-blue rounded-lg shadow-lg w-4/5 max-w-md p-6 relative">
            {isLoading && <LoadingSpinner />}
            <div className="flex flex-col text-white gap-4">
              <h1 className="text-center text-2xl font-medium">$ {qrResult?.data?.usdc_amount}</h1>
              <div>
                <h1>MNT amount</h1>
                <h1 className="text-gray-500">₮ {qrResult?.data?.amount}</h1>
              </div>
              <div>
                <h1>Account number</h1>
                <h1 className="text-gray-500">{qrResult?.data?.account_num}</h1>
              </div>

              <Button
                onClick={() => {
                  hideCamera()
                }}
              >
                Confirm
              </Button>
            </div>
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
