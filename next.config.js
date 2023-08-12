/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    legacyBrowsers: false,
    swcFileReading: true,
  },
  images: {
    disableStaticImages: true,
  },
};

module.exports = nextConfig;
