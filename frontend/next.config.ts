import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Jika kamu tidak pakai image optimization Next.js (disarankan Cloudflare Images),
  // kamu bisa matikan optimization Next otomatis ↓
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
