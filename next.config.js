/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  rewrites: async () => ([
    {
      source: '/api/:slug*',
      destination: 'https://api.coingecko.com/api/:slug*'
    }
  ])
}

module.exports = nextConfig
