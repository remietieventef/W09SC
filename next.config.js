/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Permet à Vercel de gérer correctement le build
};

module.exports = nextConfig;
