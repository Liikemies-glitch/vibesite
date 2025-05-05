import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Poista käytöstä ESLint tuotantobuildeissa
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
