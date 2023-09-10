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

if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
        `${process.env.PWD}/node_modules/canvas/build/Release:`,
    )
) {
    process.env.LD_LIBRARY_PATH = `${process.env.PWD
        }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
