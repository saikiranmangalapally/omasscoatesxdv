import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Ensures Next.js looks inside src/ directory for app
  },
};

export default nextConfig;
