// @ts-check

/** @type {import("postcss-load-config").Config} */
const postcssConfig = {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};

module.exports = postcssConfig;
