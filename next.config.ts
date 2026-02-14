import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
console.log("GITHUB_PAGES:", process.env.GITHUB_PAGES);
console.log("isGithub:", isGithubPages);
const repoName = "my-blog";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;
