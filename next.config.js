/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const prefixPath = isProd ? "/recat-Next" : "";

console.log(process.env.NEXT_PUBLIC_URL);

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: prefixPath,
  basePath: prefixPath,
  trailingSlash: true,
  compiler: {
    removeConsole: isProd,
  },
};

module.exports = nextConfig;
