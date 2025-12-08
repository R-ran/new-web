/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 明确指定 Turbopack 的根目录，避免检测到多个 lockfiles 时的混淆
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
}

export default nextConfig
