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
        source: "/my-stuff",
        destination: "https://personal-stuff.vercel.app/",
      },
      {
        source: "/my-stuff/:path*",
        destination: "https://personal-stuff.vercel.app/:path*",
      },
      {
        source: "/my-stuff-static/_next/:path*",
        destination: "https://personal-stuff.vercel.app/my-stuff-static/_next/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

