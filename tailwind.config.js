const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/**
 * @type {import('tailwindcss').Config}
 * @see https://tailwindcss.com/docs/theme
 */
const tailwindConfig = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: colors.amber,
      },
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "Geist Mono Variable", "Geist Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Figtree Variable", "Figtree", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      typography: (/** @type {{ theme: Function }} */ { theme }) => ({
        primary: {
          css: {
            "--tw-prose-links": theme("colors.primary[600]"),
            "--tw-prose-invert-links": theme("colors.primary[500]"),
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    plugin(({ addBase, addComponents, addUtilities, addVariant, e }) => {
      addUtilities({
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      });
    }),
  ],
};

module.exports = tailwindConfig;
