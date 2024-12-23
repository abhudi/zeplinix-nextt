import { NextConfig } from "next";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // This generates static HTML files for hosting
  images: {
    unoptimized: true, // Required for static export if using the Image component
  },
  trailingSlash: true, // Ensures proper file paths for static hosting
  assetPrefix: process.env.NODE_ENV === "production" ? "./" : undefined, // Adjust paths for static export
};

export default nextConfig;
