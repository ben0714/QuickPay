import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const api_url = process.env.API_URL

  const qrcode = await req.json()

  try {
    const apiResponse = await fetch(`${api_url}/qr-parser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(qrcode),
    })

    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json().catch(() => ({ message: 'Failed to fetch data' }))
      return Response.json(errorResult)
    }

    const result = await apiResponse.json()
    return Response.json(result)
  } catch (error) {
    return new Response('Server error occurred', {
      status: 500,
    })
  }
}
