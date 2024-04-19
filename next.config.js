// @ts-check

const APP_URL =
  process.env.APP_URL ||
  (process.env.VERCEL && `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
  `${process.env.PROTOCOL || "http"}://${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

/**
 * @type {import("next").NextConfig}
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 */
const nextConfig = {
  env: {
    APP_URL,
  },
  reactStrictMode: true,
  redirects: async () => [
    { source: "/about-me", destination: "/about", permanent: true },
    { source: "/contact-me", destination: "/", permanent: false },
    { source: "/contact", destination: "/", permanent: false },
    { source: "/socials", destination: "/links", permanent: true },
    { source: "/talk", destination: "/", permanent: true },
    { source: "/talks", destination: "/", permanent: true },
    { source: "/work", destination: "/projects", permanent: true },
    { source: "/works", destination: "/projects", permanent: true },
    { source: "/writings", destination: "/articles", permanent: true },
    { source: "/writings/:match*", destination: "/articles/:match*", permanent: true },
  ],
  rewrites: async () => [
    { source: "/.well-known/security.txt", destination: "/security.txt" },
    { source: "/social.png", destination: "/api/opengraph/article" },
  ],
  swcMinify: true,
  trailingSlash: false,
  transpilePackages: [],
  webpack: (config, {}) => {
    // https://github.com/antfu/shikiji/issues/13#issuecomment-1749588964
    config.module.rules.push({
      test: /\.m?js$/,
      type: "javascript/auto",
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
};

module.exports = nextConfig;
