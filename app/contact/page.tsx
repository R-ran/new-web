"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, MessageSquare, Phone, Send, User } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  // 生成随机验证码
  const generateCaptcha = () => {
    return Math.floor(1000 + Math.random() * 9000).toString()
  }

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    code: "",
  })

  const [captcha, setCaptcha] = useState(generateCaptcha())

  const handleCaptchaClick = () => {
    setCaptcha(generateCaptcha())
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Contact form:", formData)
  }

  return (
    <main className="bg-white text-slate-800">
     

      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(/placeholder.svg?height=400&width=1920&query=solar+panels+on+roof+and+ground)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-balance">Contact us</h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-300 text-balance">
            Get in touch with us for any inquiries or feedback.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-4 text-xs text-slate-500">
          Current position: 
          <Link href="/" className="text-slate-700 hover:text-primary">Home</Link>
           {" > "}  
          <Link href="/contact" className="text-slate-700 hover:text-primary">Contact us</Link>  
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: User,
                title: "Contact person",
                info: "Sophia",
              },
              {
                icon: Phone,
                title: "Phone",
                info: "+86 133 xxxx xxxx",
              },
              {
                icon: Mail,
                title: "E-mail",
                info: "info@companyname.com",
              },
              {
                icon: MapPin,
                title: "Address",
                info: "Company Address",
                subinfo: "Company Address, Company City, Country",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-border bg-muted/50 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="flex flex-col items-center gap-3 p-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-700">{item.info}</p>
                  {item.subinfo ? (
                    <p className="text-xs leading-relaxed text-slate-500">{item.subinfo}</p>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="bg-muted/50 py-16">
        <div className="mx-auto max-w-screen-xl space-y-10 px-4">
          {/* Contact Form - 占满一整行 */}
          <Card className="border-slate-200 w-full">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                      className="h-12 rounded-none border-slate-200 bg-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(event) =>
                        setFormData({ ...formData, company: event.target.value })
                      }
                      className="h-12 rounded-none border-slate-200 bg-white"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                      className="h-12 rounded-none border-slate-200 bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                      className="h-12 rounded-none border-slate-200 bg-white"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData({ ...formData, message: event.target.value })
                    }
                    className="rounded-none border-slate-200 bg-white"
                    required
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2 md:items-end">
                  <div className="space-y-2">
                    <Label htmlFor="code" className="text-sm font-medium text-slate-700">
                      Please enter verification code
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="code"
                        value={formData.code}
                        onChange={(event) => setFormData({ ...formData, code: event.target.value })}
                        className="h-12 flex-1 rounded-none border-slate-200 bg-white"
                        required
                      />
                      <button
                        type="button"
                        onClick={handleCaptchaClick}
                        className="flex h-12 cursor-pointer items-center justify-center border border-border bg-muted px-6 text-lg tracking-[0.4em] text-muted-foreground transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        title="点击刷新验证码"
                      >
                        {captcha}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="flex h-12 w-full flex-1 items-center justify-center rounded-none bg-primary px-8 text-white hover:bg-primary/90"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Map - 占满一整行 */}
          <div className="w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <iframe
              title="Jinko Solar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.6732273998847!2d120.32388501150899!3d31.56437424128219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b46949eaa01b3d%3A0x93ac9f5a353a8119!2sZhonghui%20Blvd!5e0!3m2!1sen!2scn!4v1700000000000"
              className="h-[600px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      

    </main>
  )
}
