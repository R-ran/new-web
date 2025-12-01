"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/components/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, CheckCircle } from "lucide-react"
import Link from "next/link"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useToast } from "@/hooks/use-toast"

const checkoutFormSchema = z.object({
  firstName: z.string().min(2, "名字至少需要2个字符"),
  lastName: z.string().min(2, "姓氏至少需要2个字符"),
  email: z.string().email("请输入有效的邮箱地址"),
  phone: z.string().min(10, "请输入有效的电话号码"),
  company: z.string().optional(),
  address: z.string().min(10, "请输入详细的收货地址"),
  city: z.string().min(2, "请输入城市名称"),
  state: z.string().min(2, "请输入省份名称"),
  zipCode: z.string().min(6, "请输入有效的邮政编码"),
  notes: z.string().optional(),
})

type CheckoutFormValues = z.infer<typeof checkoutFormSchema>

export function CheckoutContent() {
  const router = useRouter()
  const { state, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderCompleted, setOrderCompleted] = useState(false)
  const { toast } = useToast()

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      notes: "",
    },
  })

  if (state.items.length === 0 && !orderCompleted) {
    return (
      <div className="text-center py-16">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">购物车是空的</h2>
        <p className="text-muted-foreground mb-8">
          请先添加商品到购物车再进行结算
        </p>
        <Button asChild size="lg">
          <Link href="/products">
            浏览产品
          </Link>
        </Button>
      </div>
    )
  }

  if (orderCompleted) {
    return (
      <div className="text-center py-16 max-w-2xl mx-auto">
        <CheckCircle className="mx-auto h-24 w-24 text-green-500 mb-4" />
        <h2 className="text-3xl font-semibold mb-4">订单提交成功！</h2>
        <p className="text-muted-foreground mb-8">
          感谢您的订单！我们的客服团队将在24小时内与您联系确认订单详情和配送信息。
        </p>

        <div className="bg-muted rounded-lg p-6 text-left mb-8">
          <h3 className="font-semibold mb-4">订单详情</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">订单编号：</span>
              <span className="font-mono">JK{Date.now()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">订单金额：</span>
              <span className="font-semibold">¥{state.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">商品数量：</span>
              <span>{state.items.reduce((sum, item) => sum + item.quantity, 0)} 件</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="outline">
            <Link href="/products">
              继续购物
            </Link>
          </Button>
          <Button asChild>
            <Link href="/">
              返回首页
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true)

    try {
      // 构建订单数据
      const orderData = {
        orderNumber: `JK${Date.now()}`,
        items: state.items,
        total: state.total,
        customerInfo: data,
        orderDate: new Date().toISOString(),
      }

      // 在实际应用中，这里会调用API将订单数据保存到数据库
      console.log('订单数据:', orderData)

      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 2000))

      // 显示成功提示
      toast({
        title: "订单提交成功",
        description: "我们已收到您的订单，将尽快与您联系。",
      })

      // 清空购物车并显示订单成功页面
      clearCart()
      setOrderCompleted(true)

    } catch (error) {
      console.error('提交订单失败:', error)
      toast({
        title: "订单提交失败",
        description: "请检查网络连接或稍后重试。",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* 结算表单 */}
      <div className="lg:col-span-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 联系信息 */}
            <Card>
              <CardHeader>
                <CardTitle>联系信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>名字 *</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入名字" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>姓氏 *</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入姓氏" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>邮箱 *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="请输入邮箱地址" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>电话 *</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入电话号码" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>公司名称（选填）</FormLabel>
                      <FormControl>
                        <Input placeholder="请输入公司名称" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* 收货地址 */}
            <Card>
              <CardHeader>
                <CardTitle>收货地址</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>详细地址 *</FormLabel>
                      <FormControl>
                        <Textarea placeholder="请输入详细的收货地址" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>城市 *</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入城市" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>省份 *</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入省份" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>邮政编码 *</FormLabel>
                        <FormControl>
                          <Input placeholder="请输入邮政编码" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>订单备注（选填）</FormLabel>
                      <FormControl>
                        <Textarea placeholder="如有特殊要求请在此说明" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* 提交按钮 */}
            <div className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/cart">
                  返回购物车
                </Link>
              </Button>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "提交中..." : "提交订单"}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {/* 订单摘要 */}
      <div className="lg:col-span-1">
        <Card className="sticky top-4">
          <CardHeader>
            <CardTitle>订单摘要</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {state.items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div className="flex-1 mr-2">
                    <div className="font-medium line-clamp-1">{item.name}</div>
                    <div className="text-muted-foreground">
                      ¥{item.price.toLocaleString()} × {item.quantity}
                    </div>
                  </div>
                  <div className="font-medium">
                    ¥{(item.price * item.quantity).toLocaleString()}
                  </div>
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

            <div className="bg-muted rounded-lg p-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>全场满¥1000免费配送</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}