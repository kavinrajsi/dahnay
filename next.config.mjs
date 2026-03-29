/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "2368",
        pathname: "/content/images/**",
      },
    ],
  },
};

export default nextConfig;
