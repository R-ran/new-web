"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function NewsContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Handle form submission here
      console.log("Contact form submitted:", formData)
      // You can add API call here
      
      // Reset form after successful submission
      setFormData({ name: "", email: "", phone: "", message: "" })
      alert("Thank you for your message! We will get back to you soon.")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // 自定义验证消息
  const handleInvalid = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    const field = e.currentTarget
    const fieldName = field.getAttribute('data-field-name') || field.name || 'This field'
    
    // 根据字段类型设置不同的提示信息
    let message = ''
    if (field.type === 'email') {
      message = 'Please enter a valid email address.'
    } else if (field.id === 'name') {
      message = 'Please enter your name.'
    } else if (field.id === 'message') {
      message = 'Please enter your message.'
    } else {
      message = `Please fill in ${fieldName}.`
    }
    
    field.setCustomValidity(message)
    
    // 显示自定义提示
    if (field.reportValidity) {
      field.reportValidity()
    }
  }

  // 清除自定义验证消息（当用户开始输入时）
  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.setCustomValidity('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-slate-700">
          Name *
        </Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => {
            handleInput(e)
            setFormData({ ...formData, name: e.target.value })
          }}
          onInvalid={handleInvalid}
          className="h-10 text-sm"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            handleInput(e)
            setFormData({ ...formData, email: e.target.value })
          }}
          onInvalid={handleInvalid}
          className="h-10 text-sm"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
          Phone
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="h-10 text-sm"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-slate-700">
          Message *
        </Label>
        <Textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => {
            handleInput(e)
            setFormData({ ...formData, message: e.target.value })
          }}
          onInvalid={handleInvalid}
          className="text-sm resize-none"
          required
        />
      </div>
      
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

