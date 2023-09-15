/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => ([
    {
      source: '/api/:slug*',
      destination: 'https://api.coingecko.com/api/:slug*'
    }
  ])
}

module.exports = nextConfig
