import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "/Users/rose/ozark-aesthetician",
  },
};

export default nextConfig;