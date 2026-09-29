/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};

export default nextConfig;


