/** @type {import('next').NextConfig} */
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
});

module.exports = nextConfig;
