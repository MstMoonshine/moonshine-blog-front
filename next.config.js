/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
        legacyBrowsers: false,
        outputFileTracingExcludes: ['**canvas**']
    },
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
      webpack: (config) => {
        config.externals = [...config.externals, "canvas", "jsdom"]
        return config
      }
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
