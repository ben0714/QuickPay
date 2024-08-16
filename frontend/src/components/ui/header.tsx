import React, { useEffect } from 'react'
import { useAccount, useLogout, useSendUserOperation, useSmartAccountClient, useUser } from '@alchemy/aa-alchemy/react'
import { chain, accountType, gasManagerConfig, accountClientOptions as opts } from '@/config'
import { Button } from './button'
import Image from 'next/image'
import qrImage from '../../../public/qr.png'
import { getTransactionHistory, getEthToUsdRate, getUSDCBalance } from '@/app/providers'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { formatValueInUsd } from '@/utils'
import { ethers } from 'ethers'
import { encodeFunctionData } from "viem";

const USDC_CONTRACT_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'
const SPENDER_ADDRESS = '0x09632aC438fefDb34edfCEF94A38F7e10eCBCc2C'
const MAX_UINT256 = ethers.MaxUint256

const USDC_ABI = [
  {
    name: 'approve',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable'
  },
  {
    name: 'allowance',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' }
    ],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view'
  }
]

interface HeaderProps {
  address: string
  rate: any
  onClick: () => void
}

const Header: React.FC<HeaderProps> = ({ address, rate, onClick }) => {
  const queryClient = useQueryClient()
  const { data: ethBalance, isLoading, error } = useQuery({ queryKey: ['balance'], queryFn: () => getTransactionHistory(address, 'balance') })
  const { data: usdcBalance } = useQuery({ queryKey: [], queryFn: () => getUSDCBalance(address) })
  const balance = formatValueInUsd(ethBalance, rate)
  console.log(address)

  const { client } = useSmartAccountClient({
    type: "MultiOwnerModularAccount",
  });
  const { sendUserOperation, isSendingUserOperation } = useSendUserOperation({
    client,
    onSuccess: ({ hash, request }) => {
      console.log('User operation sent successfully', hash, request)
    },
    onError: (error) => {
      console.error('Error sending user operation:', error)
    },
  });

  const [isApproved, setIsApproved] = React.useState(false)

  useEffect(() => {
    const checkAndApproveUSDC = async () => {
      if (client && !isApproved) {
        try {

          // Approve if not already max
          const approveData = encodeFunctionData({
            abi: USDC_ABI,
            functionName: "approve",
            args: [SPENDER_ADDRESS, MAX_UINT256],
          });

          const userOp = await sendUserOperation({
            uo: {
              target: USDC_CONTRACT_ADDRESS,
              data: approveData,
            },
          });

          console.log('Max USDC approval sent successfully', userOp);

          setIsApproved(true);
        } catch (error) {
          console.error('Error checking/approving USDC:', error);
        }
      }
    };

    checkAndApproveUSDC();
  }, [client, sendUserOperation, address, isApproved]);

  return (
    <div className="">
      <div className="pt-12 pb-4 px-4 flex flex-col bg-white gap-8 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <img src="https://avatars.githubusercontent.com/u/77936727?v=4" alt="profile" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="text-base font-medium">{address} </span>
            <span className="text-xs text-gray-500">Welcome Back</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-lg text-gray-500">Total USDC Balance</h1>
          <h1 className="text-4xl font-medium">$ {usdcBalance}</h1>
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