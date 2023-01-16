/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/pages',
  trailingSlash: true,
};

module.exports = nextConfig;
