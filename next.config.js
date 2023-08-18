/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const prefixPath =
  isProd && process.env.NEXT_PUBLIC_PREFIC_PATH
    ? process.env.NEXT_PUBLIC_PREFIC_PATH
    : "";

console.log(prefixPath === "");

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: prefixPath,
  basePath: prefixPath,
  trailingSlash: true,
  // compiler: {
  //   removeConsole: isProd,
  // },
};

module.exports = nextConfig;
