/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig = {
  output: 'standalone',
  outputFileTracingRoot: path.join(__dirname, "../../"),
  images: {
    unoptimized: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};

export default nextConfig;


