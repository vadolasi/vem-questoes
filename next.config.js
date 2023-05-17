/** @type {import("next").NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public"
})

module.exports = withPWA({
  reactStrictMode: true,
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
  }
})
