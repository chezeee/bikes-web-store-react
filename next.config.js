/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint: { ignoreDuringBuilds: true }, // eslint:disable
  
  experimental: { esmExternals: true }, // Для правильного импорта SWR
};

module.exports = nextConfig;
