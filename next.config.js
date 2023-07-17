/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'image.alo2.ink' }],
  },
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
module.exports = withMDX(nextConfig)
