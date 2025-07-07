/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com'],
  },
  env: {
    FACEBOOK_TOKEN: process.env.FACEBOOK_TOKEN,
    FACEBOOK_PAGE_ID: process.env.FACEBOOK_PAGE_ID,
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
    API_CATALOG_ID: process.env.API_CATALOG_ID,
    GLOBAL_API: process.env.GLOBAL_API,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
  }
}

module.exports = nextConfig
