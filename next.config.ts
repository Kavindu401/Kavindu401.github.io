import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization since GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
