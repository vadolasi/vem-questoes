/** @type {import("next").NextConfig} */

module.exports = {
  reactStrictMode: true,
  experimental: {
    serverMinification: false
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
}
