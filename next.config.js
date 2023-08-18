/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const prefixPath = isProd ? "/recat-Next" : "";

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: process.env.VERCEL_PAGE ? "" : prefixPath,
  basePath: prefixPath,
  trailingSlash: true,
  // compiler: {
  //   removeConsole: isProd,
  // },
};

module.exports = nextConfig;
