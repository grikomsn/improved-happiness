// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 * @see https://eslint.org/docs/latest/use/configure/
 */
const eslintConfig = {
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  rules: {
    "react/jsx-sort-props": ["warn"],
  },
  root: true,
};

module.exports = eslintConfig;
