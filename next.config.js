/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    FACEBOOK_TOKEN: process.env.FACEBOOK_TOKEN,
    FACEBOOK_PAGE_ID: process.env.FACEBOOK_PAGE_ID,
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
  }
}

module.exports = nextConfig
