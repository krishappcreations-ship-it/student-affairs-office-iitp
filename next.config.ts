import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local assets live in /public/iitp. These remote patterns are a
    // fallback so gallery `remoteUrl` sources still render if a local
    // binary is missing.
    remotePatterns: [
      { protocol: "https", hostname: "www.iitp.ac.in" },
      { protocol: "https", hostname: "iitp.ac.in" },
    ],
  },
};

export default nextConfig;
