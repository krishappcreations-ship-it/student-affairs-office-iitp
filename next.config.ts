import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Anti-clickjacking without restricting our own resource loading
  // (full resource CSP omitted to stay compatible with Next inline
  // bootstrap scripts and the Google Maps embed on /contact).
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
];

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
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
