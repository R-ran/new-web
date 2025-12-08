import { Metadata } from "next"
import { CheckoutContent } from "@/components/checkout/checkout-content"

export const metadata: Metadata = {
  title: "Checkout - product_name",
  description: "Complete your order checkout",
}

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
        <p className="text-muted-foreground mt-2">
          Please fill in the shipping information and confirm the order details
        </p>
      </div>

      <CheckoutContent />
    </div>
  )
}