import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  experimental: {

  },

  images: {
    qualities: [100, 75],
    // Next accepts `URL` entries directly (see `images.remotePatterns` in Next types).
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "m2mtek.com",
      },
    ]
  },
}

export default withPayload(nextConfig)
