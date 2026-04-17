/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    qualities: [90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "20.219.8.121",
      },
      {
        protocol: 'http',
        hostname: 'studio.dahnay.com',
        pathname: '/content/images/**',
      },
    ],
  },
};

export default nextConfig;
