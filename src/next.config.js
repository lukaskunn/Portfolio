/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/my-stuff",
        destination: "https://personal-stuff.vercel.app/my-stuff",
      },
      {
        source: "/my-stuff/:path*",
        destination: "https://personal-stuff.vercel.app/my-stuff/:path*",
      }
    ];
  },
};

module.exports = nextConfig;

