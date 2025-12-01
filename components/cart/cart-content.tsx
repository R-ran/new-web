"use client"

import { useCart } from "@/components/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function CartContent() {
  const { state, updateQuantity, removeItem, clearCart } = useCart()

  if (state.items.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">购物车是空的</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          您还没有添加任何商品到购物车。浏览我们的产品页面，找到您需要的太阳能产品。
        </p>
        <Button asChild size="lg">
          <Link href="/products">
            浏览产品
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* 购物车商品列表 */}
      <div className="lg:col-span-2 space-y-4">
        {state.items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                {/* 商品图片 */}
                <div className="w-full sm:w-48 h-48 bg-muted flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <ShoppingBag className="h-12 w-12" />
                    </div>
                  )}
                </div>

                {/* 商品信息 */}
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      {item.category && (
                        <Badge variant="secondary" className="mb-2">
                          {item.category}
                        </Badge>
                      )}
                      {item.description && (
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">
                        ¥{item.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        单价
                      </div>
                    </div>
                  </div>

                  {/* 数量控制 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">数量：</span>
                      <div className="flex items-center space-x-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-lg font-semibold">
                          ¥{(item.price * item.quantity).toLocaleString()}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          小计
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* 购物车操作按钮 */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={clearCart}
            className="text-destructive hover:text-destructive"
          >
            清空购物车
          </Button>
          <Button variant="outline" asChild>
            <Link href="/products">
              继续购物
            </Link>
          </Button>
        </div>
      </div>

      {/* 订单摘要 */}
      <div className="lg:col-span-1">
        <Card className="sticky top-4">
          <CardHeader>
            <CardTitle>订单摘要</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.name} × {item.quantity}
                  </span>
                  <span>¥{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">商品小计</span>
                <span>¥{state.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">运费</span>
                <span>免费</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">税费</span>
                <span>¥0</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between text-lg font-semibold">
              <span>总计</span>
              <span>¥{state.total.toLocaleString()}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout">
                前往结算
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}