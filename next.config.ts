import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    // legacy media from the old Strapi setup (Cloudinary free tier)
    remotePatterns: [new URL("https://res.cloudinary.com/ddqehibx0/**")],
  },
  partialPrefetching: true,
  // covers every response, including non-HTML files the robots meta tag can't reach.
  // don't add a robots.txt Disallow: crawlers would stop fetching pages and never see this
  headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
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
