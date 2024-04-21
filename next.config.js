// @ts-check

const APP_URL =
  process.env.APP_URL ||
  (process.env.VERCEL && `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`) ||
  `${process.env.PROTOCOL || "http"}://${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

const domain =
  APP_URL?.replace(/https?:\/\//, "").split("/")[0] ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  `${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

const CSP_HEADER = `
  child-src *.twitter.com;
  connect-src *;
  default-src 'self';
  font-src data: 'self' *.${domain} fonts.gstatic.com;
  img-src * blob: data:;
  media-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.${domain} *.vercel-scripts.com fonts.googleapis.com;
  style-src 'self' 'unsafe-inline' *.${domain} fonts.googleapis.com;
`
  .replace(/^\s+/g, "")
  .trim();

/**
 * @type {import("next").NextConfig}
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 */
const nextConfig = {
  env: {
    APP_URL,
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Content-Security-Policy", value: CSP_HEADER.replace(/\n/g, "") },
        { key: "Permissions-Policy", value: "camera=(), geolocation=(), interest-cohort=(), microphone=()" },
        { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-DNS-Prefetch-Control", value: "on" },
      ],
    },
  ],
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
    { source: "/resume/:path*", destination: "https://resume.nibras.co/:path*" },
    { source: "/resume.pdf", destination: "https://resume.nibras.co/resume.pdf" },
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
