/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [], // Adicione aqui os domínios das imagens externas se necessário
    unoptimized: false,
  },
};

module.exports = nextConfig;
