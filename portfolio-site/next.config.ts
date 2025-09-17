import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  outputFileTracingRoot: __dirname,
  distDir: 'out',
  generateBuildId: async () => {
    return 'static-build'
  }
};

export default nextConfig;
