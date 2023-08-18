/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? "/recat-Next" : "",
  trailingSlash: true,
  // compiler: {
  //   removeConsole: isProd,
  // },
};

module.exports = nextConfig;
