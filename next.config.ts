/** @type {import('next').NextConfig} */
const nextConfig = { 
  basePath: '/my-blog',
  assetPrefix: "/my-blog/",
  images: { unoptimized: true },
};

module.exports = nextConfig;
