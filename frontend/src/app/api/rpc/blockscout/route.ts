import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const address = searchParams.get('address')
  const action = searchParams.get('action')

  if (!address) {
    return NextResponse.json({ error: 'Address is required' }, { status: 400 })
  }

  const apiUrl = `https://base.blockscout.com/api?module=account&action=${action}&address=${address}&startblock=0&endblock=99999999&sort=desc`
  const apiKey = process.env.BLOCKSCOUT_API_KEY // Ensure you have set this in your environment variables

  if (!apiKey) {
    return NextResponse.json({ error: 'BLOCKSCOUT_API_KEY is not set' }, { status: 500 })
  }

  try {
    const res = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}))
      return NextResponse.json(errorData, { status: res.status })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching transaction history' }, { status: 500 })
  }
}
