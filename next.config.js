/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['seu-dominio.com'],
  },
}

module.exports = nextConfig
