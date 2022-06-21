/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["64.media.tumblr.com"],
  },
};

const withTM = require("next-transpile-modules")(["three"]);

module.exports = withTM();
module.exports = nextConfig;
module.exports = {
  i18n: {
    locales: ["pt"],
    defaultLocale: "pt",
  },
};
