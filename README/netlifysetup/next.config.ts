import type { NextConfig } from "next";

const nextConfig: NextConfig = {
// REQUIRED for Netlify + static hosting
output: "export",

// Optional but recommended
images: {
unoptimized: true, // needed for static export
},

 

// Optional: trailing slash helps static hosting
trailingSlash: true,
};

export default nextConfig;
