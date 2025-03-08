import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // active le mode strict de React pour détecter les problèmes
  swcMinify: true,       // utilise le compilateur SWC pour minifier
};

export default nextConfig;
