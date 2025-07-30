import { NextConfig } from 'next';
import withImages from 'next-images';
import withOptimizedImages from 'next-optimized-images';
import withTM from 'next-transpile-modules';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['example.com'], // replace 'example.com' with your image source domain
  },
};

export default withTM(withOptimizedImages(withImages(nextConfig)));
