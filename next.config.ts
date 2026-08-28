import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next 16 builds with Turbopack by default; nothing to opt into here.
  // Images are served from /public, so no remotePatterns are needed.
};

export default nextConfig;
