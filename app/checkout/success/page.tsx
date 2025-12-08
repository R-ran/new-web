"use client"

import { useEffect, useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckCircle, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useCart } from "@/components/context/cart-context"
import { useToast } from "@/hooks/use-toast"

function CheckoutSuccessContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { clearCart } = useCart()
  const { toast } = useToast()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [orderData, setOrderData] = useState<any>(null)

  useEffect(() => {
    const processPayment = async () => {
      try {
        // 从 URL 获取 PayPal 订单 ID
        const token = searchParams.get('token')
        const payerId = searchParams.get('PayerID')
        
        // 从 sessionStorage 获取订单数据
        const pendingOrderStr = sessionStorage.getItem('pendingOrder')
        const paypalOrderId = sessionStorage.getItem('paypalOrderId') || token

        if (!paypalOrderId) {
          throw new Error('Payment order information not found')
        }

        if (!pendingOrderStr) {
          throw new Error('Order data not found')
        }

        const pendingOrder = JSON.parse(pendingOrderStr)

        // 捕获 PayPal 订单
        const captureResponse = await fetch('/api/paypal/capture-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId: paypalOrderId,
          }),
        })

        if (!captureResponse.ok) {
          const errorData = await captureResponse.json()
          throw new Error(errorData.error || 'Payment capture failed')
        }

        const captureData = await captureResponse.json()

        // 构建完整的订单数据
        const completeOrderData = {
          ...pendingOrder,
          paypalOrderId: captureData.orderId,
          paymentStatus: captureData.status,
          payer: captureData.payer,
        }

        // 发送订单确认邮件
        const emailResponse = await fetch('/api/orders/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(completeOrderData),
        })

        if (!emailResponse.ok) {
          console.error('Email sending failed, but the order has been successfully')
        }

        // 清空购物车和 sessionStorage
        clearCart()
        sessionStorage.removeItem('pendingOrder')
        sessionStorage.removeItem('paypalOrderId')

        setOrderData(completeOrderData)
        setStatus('success')

        toast({
          title: "Payment successful",
          description: "The order has been confirmed, and we have received your payment.",
        })

      } catch (error: any) {
        console.error('Payment processing failed:', error)
        setStatus('error')
        toast({
          title: "Payment processing failed",
          description: error.message || "Please try again later or contact the customer service.",
          variant: "destructive",
        })
      }
    }

    processPayment()
  }, [searchParams, clearCart, toast])

  if (status === 'loading') {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center">
          <Loader2 className="mx-auto h-16 w-16 text-primary animate-spin mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Processing your payment...</h2>
          <p className="text-muted-foreground">
            Please wait, we are confirming your payment information
          </p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <div className="text-center">
          <XCircle className="mx-auto h-16 w-16 text-destructive mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Payment processing failed</h2>
          <p className="text-muted-foreground mb-8">
            We're sorry, but there was a problem processing your payment. If your account has been debited, please contact customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/checkout">Return to checkout page</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact customer service</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <CheckCircle className="mx-auto h-24 w-24 text-green-500 mb-4" />
        <h1 className="text-3xl font-bold tracking-tight mb-2">Payment successful!</h1>
        <p className="text-muted-foreground">
          Thank you for your order! The order confirmation email has been sent to 1131811130@qq.com
        </p>
      </div>

      {orderData && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Order details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">订单编号</p>
                <p className="font-mono font-semibold">{orderData.orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">PayPal 订单ID</p>
                <p className="font-mono text-sm">{orderData.paypalOrderId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">支付状态</p>
                <p className="font-semibold text-green-600">{orderData.paymentStatus}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">订单金额</p>
                <p className="font-semibold text-lg">¥{orderData.total.toLocaleString()}</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">客户信息</p>
              <div className="space-y-1 text-sm">
                <p>
                  <strong>姓名：</strong>
                  {orderData.customerInfo.firstName} {orderData.customerInfo.lastName}
                </p>
                <p>
                  <strong>邮箱：</strong>
                  {orderData.customerInfo.email}
                </p>
                <p>
                  <strong>电话：</strong>
                  {orderData.customerInfo.phone}
                </p>
                <p>
                  <strong>地址：</strong>
                  {orderData.customerInfo.address}, {orderData.customerInfo.city}, {orderData.customerInfo.state} {orderData.customerInfo.zipCode}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">订单商品</p>
              <div className="space-y-2">
                {orderData.items.map((item: any) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-medium">
                      ¥{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="bg-muted rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-2">接下来会发生什么？</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• 我们的客服团队将在24小时内与您联系确认订单详情</li>
          <li>• 订单确认后，我们将尽快安排发货</li>
          <li>• 您将收到订单确认邮件（已发送到 1131811130@qq.com）</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild variant="outline">
          <Link href="/products">继续购物</Link>
        </Button>
        <Button asChild>
          <Link href="/">返回首页</Link>
        </Button>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-16 max-w-2xl">
          <div className="text-center">
            <Loader2 className="mx-auto h-16 w-16 text-primary animate-spin mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Loading...</h2>
            <p className="text-muted-foreground">
              Please wait, we are loading your payment information
            </p>
          </div>
        </div>
      }
    >
      <CheckoutSuccessContent />
    </Suspense>
  )
}

