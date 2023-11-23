// @ts-check

/* #__PURE__ */
const domain =
  process.env.APP_URL?.replace(/https?:\/\//, "").split("/")[0] ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  `${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

/* #__PURE__ */
const protocol = domain.includes("localhost") || domain.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) ? "http" : "https";

/* #__PURE__ */
const url = `${protocol}://${domain}`;

/* #__PURE__ */
const defaultMetadata = {
  title: "Griko Nibras",
  description: "Software engineer specialized in frontend development",
  email: "griko@nibras.co",
  domain,
  url,
  bluesky: {
    actor: "did:plc:rue26duvigfk3zi5sselzwjc",
    handle: "griko.bsky.social",
  },
  github: {
    username: "grikomsn",
    repository: "improved-happiness",
  },
  x: {
    creator: "@___0xdeadbeef",
    creatorId: "1702059533714309121",
  },
};

/* #__PURE__ */
const customMetadata = {
  blueskyUrl: `https://bsky.app/profile/${defaultMetadata.bluesky.actor}`,
  cohostUrl: "https://cohost.org/griko",
  emailUrl: `mailto:${defaultMetadata.email}`,
  githubUrl: `https://github.com/${defaultMetadata.github.username}`,
  linkedInUrl: "https://linkedin.com/in/griko",
  keybaseUrl: "https://keybase.io/grikomsn",
  mastodonUrl: "https://mastodon.social/@griko",
  matrixUrl: "https://matrix.to/#/@griko:matrix.org",
  scheduleUrl: `https://nbrs.fyi/schedule`,
  xUrl: `https://x.com/${defaultMetadata.x.creator}`,
};

exports.defaultMetadata = defaultMetadata;
exports.customMetadata = customMetadata;
