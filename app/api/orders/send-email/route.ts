import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// 创建邮件传输器
function createTransporter() {
  // 使用 QQ 邮箱 SMTP 服务
  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // 发送邮件的 QQ 邮箱
      pass: process.env.EMAIL_PASS, // QQ 邮箱授权码（不是密码）
    },
  })

  return transporter
}

// 生成订单邮件 HTML 内容
function generateOrderEmailHTML(orderData: any) {
  const {
    orderNumber,
    customerInfo,
    items,
    total,
    orderDate,
    paypalOrderId,
    paymentStatus,
  } = orderData

  const itemsHTML = items
    .map(
      (item: any) => `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">¥${item.price.toLocaleString()}</td>
      <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">¥${(item.price * item.quantity).toLocaleString()}</td>
    </tr>
  `
    )
    .join('')

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9fafb; padding: 20px; }
    .order-info { background-color: white; padding: 15px; margin: 15px 0; border-radius: 5px; }
    .table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    .table th { background-color: #f3f4f6; padding: 10px; text-align: left; border-bottom: 2px solid #e5e7eb; }
    .total { font-size: 18px; font-weight: bold; color: #2563eb; text-align: right; padding: 15px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>新订单通知</h1>
    </div>
    <div class="content">
      <p>您收到了一笔新订单，详情如下：</p>
      
      <div class="order-info">
        <h2>订单信息</h2>
        <p><strong>订单编号：</strong>${orderNumber}</p>
        <p><strong>订单日期：</strong>${new Date(orderDate).toLocaleString('zh-CN')}</p>
        <p><strong>PayPal 订单ID：</strong>${paypalOrderId || 'N/A'}</p>
        <p><strong>支付状态：</strong>${paymentStatus || '已完成'}</p>
      </div>

      <div class="order-info">
        <h2>客户信息</h2>
        <p><strong>姓名：</strong>${customerInfo.firstName} ${customerInfo.lastName}</p>
        <p><strong>邮箱：</strong>${customerInfo.email}</p>
        <p><strong>电话：</strong>${customerInfo.phone}</p>
        ${customerInfo.company ? `<p><strong>公司：</strong>${customerInfo.company}</p>` : ''}
        <p><strong>地址：</strong>${customerInfo.address}</p>
        <p><strong>城市：</strong>${customerInfo.city}</p>
        <p><strong>省份：</strong>${customerInfo.state}</p>
        <p><strong>邮编：</strong>${customerInfo.zipCode}</p>
        ${customerInfo.notes ? `<p><strong>备注：</strong>${customerInfo.notes}</p>` : ''}
      </div>

      <div class="order-info">
        <h2>订单商品</h2>
        <table class="table">
          <thead>
            <tr>
              <th>商品名称</th>
              <th style="text-align: center;">数量</th>
              <th style="text-align: right;">单价</th>
              <th style="text-align: right;">小计</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHTML}
          </tbody>
        </table>
        <div class="total">
          订单总额：¥${total.toLocaleString()}
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    if (!orderData.orderNumber || !orderData.customerInfo || !orderData.items) {
      return NextResponse.json(
        { error: 'Invalid order data' },
        { status: 400 }
      )
    }

    // 检查邮件配置
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const transporter = createTransporter()

    // 发送邮件
    const mailOptions = {
      from: `"金科太阳能订单系统" <${process.env.EMAIL_USER}>`,
      to: '1131811130@qq.com', // 接收订单的邮箱
      subject: `新订单通知 - ${orderData.orderNumber}`,
      html: generateOrderEmailHTML(orderData),
      text: `
新订单通知

订单编号：${orderData.orderNumber}
订单日期：${new Date(orderData.orderDate).toLocaleString('zh-CN')}
客户姓名：${orderData.customerInfo.firstName} ${orderData.customerInfo.lastName}
客户邮箱：${orderData.customerInfo.email}
客户电话：${orderData.customerInfo.phone}
收货地址：${orderData.customerInfo.address}, ${orderData.customerInfo.city}, ${orderData.customerInfo.state} ${orderData.customerInfo.zipCode}

订单商品：
${orderData.items.map((item: any) => `- ${item.name} × ${item.quantity} = ¥${(item.price * item.quantity).toLocaleString()}`).join('\n')}

订单总额：¥${orderData.total.toLocaleString()}
      `,
    }

    const info = await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    })
  } catch (error: any) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    )
  }
}

