/** @type {import('next').NextConfig} */
const nextConfig = {
  // we run these in ci instead
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: "export",
};

module.exports = nextConfig;
