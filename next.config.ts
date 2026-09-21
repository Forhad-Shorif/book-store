import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // অথবা নির্দিষ্ট ডোমেন যেমন: 'i.ibb.co'
      },
    ],
  },

  // reactCompiler: true,
};

export default nextConfig;
