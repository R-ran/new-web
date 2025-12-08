# PayPal 支付集成说明

## 配置步骤

### 1. PayPal 配置

1. 访问 [PayPal Developer](https://developer.paypal.com/)
2. 登录或注册 PayPal 开发者账户
3. 创建应用获取 Client ID 和 Secret：
   - 进入 Dashboard -> My Apps & Credentials
   - 创建新应用（选择 Sandbox 用于测试，或 Live 用于生产）
   - 复制 Client ID 和 Secret

### 2. 邮件配置（QQ 邮箱）

1. 登录您的 QQ 邮箱
2. 进入 **设置** -> **账户**
3. 找到 **POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务**
4. 开启 **POP3/SMTP服务** 或 **IMAP/SMTP服务**
5. 点击 **生成授权码**，复制生成的授权码（不是邮箱密码）

### 3. 环境变量配置

1. 复制 `.env.example` 文件为 `.env.local`
2. 填写以下配置：

```env
# PayPal 配置
PAYPAL_CLIENT_ID=你的PayPal客户端ID
PAYPAL_CLIENT_SECRET=你的PayPal客户端密钥
PAYPAL_ENVIRONMENT=sandbox  # 测试环境使用 sandbox，生产环境使用 live

# 邮件配置
EMAIL_USER=你的QQ邮箱@qq.com
EMAIL_PASS=你的QQ邮箱授权码

# 应用URL（生产环境需要改为实际域名）
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 支付流程

1. 用户在结账页面填写订单信息
2. 点击"提交订单"后，系统创建 PayPal 订单
3. 用户被重定向到 PayPal 支付页面
4. 用户完成支付后，PayPal 重定向回 `/checkout/success`
5. 系统捕获支付并发送订单确认邮件到 `1131811130@qq.com`
6. 显示支付成功页面

## 测试 PayPal 支付

在 Sandbox 环境中，可以使用 PayPal 提供的测试账户：
- 访问 [PayPal Sandbox](https://developer.paypal.com/dashboard/accounts)
- 使用测试买家账户进行支付测试

## 注意事项

1. **生产环境部署前**：
   - 将 `PAYPAL_ENVIRONMENT` 改为 `live`
   - 更新 `NEXT_PUBLIC_BASE_URL` 为实际域名
   - 确保所有环境变量都已正确配置

2. **邮件发送**：
   - 订单确认邮件会发送到 `1131811130@qq.com`
   - 如需修改接收邮箱，请编辑 `app/api/orders/send-email/route.ts`

3. **安全性**：
   - 不要将 `.env.local` 文件提交到版本控制系统
   - 确保 PayPal 密钥和邮箱授权码的安全性

