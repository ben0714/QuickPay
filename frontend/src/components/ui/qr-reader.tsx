import React, { useEffect, useRef, useState } from 'react'
import QrScanner from 'qr-scanner'

interface QRScannerComponentProps {
  handleScan: (result: string | null) => void
  isScanning: boolean
}

const QRScannerComponent: React.FC<QRScannerComponentProps> = ({ handleScan, isScanning }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          if (result) {
            handleScan(result?.data) // Handle the scan result
            qrScanner.stop() // Stop scanning after detecting a QR code
          }
        },
        {
          onDecodeError: (error) => console.log(error),
          highlightScanRegion: false, // Optional, to show the scan region
          highlightCodeOutline: false, // Optional, to highlight the detected QR code
        },
      )

      if (isScanning) {
        qrScanner.start()
      }

      return () => {
        qrScanner.stop() // Cleanup on component unmount
      }
    }
  }, [isScanning, handleScan])

  return (
    <div>
      <div className="relative w-64 h-64 border-white border-4 rounded-xl">
        <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  )
}

export default QRScannerComponent
