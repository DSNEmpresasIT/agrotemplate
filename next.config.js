/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    FACEBOOK_TOKEN: process.env.FACEBOOK_TOKEN,
    FACEBOOK_PAGE_ID: process.env.FACEBOOK_PAGE_ID,
    INSTAGRAM_TOKEN: process.env.INSTAGRAM_TOKEN,
    API_CATALOG_ID: process.env.API_CATALOG_ID,
    GLOBAL_API_BASE_URL_DEVELOPMENT: process.env.GLOBAL_API_BASE_URL_DEVELOPMENT,
  }
}

module.exports = nextConfig
