import { Metadata } from "next"
import { CheckoutContent } from "@/components/checkout/checkout-content"

export const metadata: Metadata = {
  title: "结算 - 金科太阳能",
  description: "完成您的订单结算",
}

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">订单结算</h1>
        <p className="text-muted-foreground mt-2">
          请填写收货信息并确认订单详情
        </p>
      </div>

      <CheckoutContent />
    </div>
  )
}