/** @type {import("next").NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public"
})

module.exports = withPWA({
  reactStrictMode: true,
  pageExtensions: ["tsx"],
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
})
