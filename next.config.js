// @ts-check

let APP_URL;

if (process.env.APP_URL) {
  APP_URL = process.env.APP_URL;
} else if (process.env.VERCEL) {
  APP_URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
} else {
  APP_URL = `${process.env.PROTOCOL || "http"}://${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;
}

/**
 * @type {import("next").NextConfig}
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 */
const nextConfig = {
  env: {
    APP_URL: APP_URL || "",
  },
  reactStrictMode: true,
  redirects: async () => [
    { source: "/contact", destination: "/", permanent: false },
    { source: "/social.png", destination: "/api/opengraph/article", permanent: false },
    //
  ],
  rewrites: async () => [
    //
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
