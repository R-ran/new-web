"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, MessageCircle } from "lucide-react"
import { useCart } from "@/components/context/cart-context"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: string
  name: string
  description: string
  image: string
  price?: number
  category?: string
}

interface ProductCardProps {
  product: Product
  onInquiry?: () => void
  showPrice?: boolean
}

export function ProductCard({ product, onInquiry, showPrice = true }: ProductCardProps) {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price || 0,
      image: product.image,
      category: product.category,
      description: product.description
    }

    addItem(cartItem)

    toast({
      title: "添加到购物车成功",
      description: `${product.name} 已添加到购物车`,
    })
  }

  return (
    <Card className="overflow-hidden border border-border shadow-sm transition hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="300px"
        />
        {product.category && (
          <Badge className="absolute top-2 left-2" variant="secondary">
            {product.category}
          </Badge>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="mb-3 text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">{product.description}</p>

        {showPrice && product.price && (
          <div className="mb-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              ¥{product.price.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              起订量：1件
            </div>
          </div>
        )}

        <div className="space-y-2">
          {showPrice ? (
            <Button
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleAddToCart}
              disabled={!product.price}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              {product.price ? "加入购物车" : "联系询价"}
            </Button>
          ) : (
            <Button
              className="w-full"
              variant="outline"
              onClick={onInquiry}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Send Inquiry Now
            </Button>
          )}

          {onInquiry && (
            <Button
              className="w-full"
              variant="outline"
              onClick={onInquiry}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              咨询详情
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}