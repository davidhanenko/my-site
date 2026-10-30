import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    // legacy media from the old Strapi setup (Cloudinary free tier)
    remotePatterns: [new URL("https://res.cloudinary.com/ddqehibx0/**")],
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      // only the Tailwind entry — a "*.css" glob also catches *.module.css
      // and `as: "*.css"` strips their CSS-module class exports
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
