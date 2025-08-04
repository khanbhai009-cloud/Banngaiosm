/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['envs.sh', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
