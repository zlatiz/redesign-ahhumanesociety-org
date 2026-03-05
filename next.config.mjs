/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ahhumanesociety.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rescuegroups.org',
      },
    ],
  },
};
export default nextConfig;