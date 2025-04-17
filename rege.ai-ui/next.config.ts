import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["api.microlink.io", "placehold.co"], // TODO: migrate from domains
  },
};

export default nextConfig;
