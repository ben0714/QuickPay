'use client'

import { useAuthenticate, useSignerStatus } from '@alchemy/aa-alchemy/react'
import { FormEvent, useCallback, useState } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Input } from './ui/input'
import logo from '../../public/logo.png'

export const LogInCard = () => {
  const [email, setEmail] = useState<string>('')
  const onEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), [])
  // [!region authenticating]
  const { authenticate } = useAuthenticate()
  const login = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    authenticate({ type: 'email', email })
  }

  const { status } = useSignerStatus()
  const isAwaitingEmail = status === 'AWAITING_EMAIL_AUTH'
  // [!endregion authenticating]

  return (
    <>
      {isAwaitingEmail ? (
        <div className="text-white flex flex-col items-center">
          <div className="flex flex-col items-center gap-2">
            <Image src={logo} alt="scan qr" width={60} height={60} />
            <h1 className="text-white text-2xl text-center">QuickPay</h1>
          </div>

          <h1>Please check your inbox</h1>
          <p>We have sent confirmation email to your {email}</p>
        </div>
      ) : (
        <form className="flex flex-col gap-8 items-center w-full p-4" onSubmit={login}>
          <div className="flex flex-col items-center gap-2">
            <Image src={logo} alt="scan qr" width={60} height={60} />
            <h1 className="text-white text-2xl text-center">QuickPay</h1>
          </div>

          <div className="flex flex-col justify-between gap-6 w-full">
            <div className="w-full flex flex-col gap-2">
              <p className="text-white">Email</p>
              <Input className="w-full rounded p-2" type="email" placeholder="Enter your email" value={email} onChange={onEmailChange} />
            </div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      )}
    </>
  )
}
