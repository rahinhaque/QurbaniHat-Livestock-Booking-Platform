/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This wildcard allows all hostnames
      },
      {
        protocol: "http",
        hostname: "**", // This allows non-https images too
      },
    ],
  },
};

export default nextConfig;
