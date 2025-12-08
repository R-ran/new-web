import { NextRequest, NextResponse } from 'next/server'

// 获取 PayPal 访问令牌
async function getPayPalAccessToken(): Promise<string> {
  const clientId = process.env.PAYPAL_CLIENT_ID
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET
  const environment = process.env.PAYPAL_ENVIRONMENT || 'sandbox'
  const baseUrl = environment === 'live' 
    ? 'https://api-m.paypal.com' 
    : 'https://api-m.sandbox.paypal.com'

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials are not configured')
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')

  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${auth}`,
    },
    body: 'grant_type=client_credentials',
  })

  if (!response.ok) {
    throw new Error('Failed to get PayPal access token')
  }

  const data = await response.json()
  return data.access_token
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { orderId } = body

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      )
    }

    const accessToken = await getPayPalAccessToken()
    const environment = process.env.PAYPAL_ENVIRONMENT || 'sandbox'
    const baseUrl = environment === 'live' 
      ? 'https://api-m.paypal.com' 
      : 'https://api-m.sandbox.paypal.com'

    // 捕获订单
    const response = await fetch(`${baseUrl}/v2/checkout/orders/${orderId}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
    })

    const data = await response.json()

    if (response.ok && data.id) {
      return NextResponse.json({
        success: true,
        orderId: data.id,
        status: data.status,
        payer: data.payer,
        purchase_units: data.purchase_units,
      })
    }

    return NextResponse.json(
      { error: data.message || 'Failed to capture PayPal order', details: data },
      { status: response.status || 500 }
    )
  } catch (error: any) {
    console.error('PayPal capture error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to capture order' },
      { status: 500 }
    )
  }
}

