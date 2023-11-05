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
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      displayName: true,
      // Enabled by default.
      ssr: true,
    },
  },
};

module.exports = nextConfig;
