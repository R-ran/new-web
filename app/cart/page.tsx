import { Metadata } from "next"
import { CartContent } from "@/components/cart/cart-content"

export const metadata: Metadata = {
  title: "购物车 - 金科太阳能",
  description: "查看和管理您的购物车商品",
}

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">购物车</h1>
        <p className="text-muted-foreground mt-2">
          管理您的购物车商品，准备结算
        </p>
      </div>

      <CartContent />
    </div>
  )
}