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
    const { amount, currency = 'USD', items } = body

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      )
    }

    const accessToken = await getPayPalAccessToken()
    const environment = process.env.PAYPAL_ENVIRONMENT || 'sandbox'
    const baseUrl = environment === 'live' 
      ? 'https://api-m.paypal.com' 
      : 'https://api-m.sandbox.paypal.com'

    // 创建订单请求
    const orderRequest = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: currency,
                value: amount.toFixed(2),
              },
            },
          },
          items: items?.map((item: any) => ({
            name: item.name.substring(0, 127), // PayPal 限制商品名称长度
            quantity: item.quantity.toString(),
            unit_amount: {
              currency_code: currency,
              value: item.price.toFixed(2),
            },
          })) || [],
        },
      ],
      application_context: {
        brand_name: 'product_name',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout`,
      },
    }

    // 调用 PayPal API 创建订单
    const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(orderRequest),
    })

    const data = await response.json()

    if (response.ok && data.id) {
      // 找到批准链接
      const approvalLink = data.links?.find(
        (link: any) => link.rel === 'approve'
      )

      return NextResponse.json({
        orderId: data.id,
        approvalUrl: approvalLink?.href,
      })
    }

    return NextResponse.json(
      { error: data.message || 'Failed to create PayPal order', details: data },
      { status: response.status || 500 }
    )
  } catch (error: any) {
    console.error('PayPal order creation error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    )
  }
}

