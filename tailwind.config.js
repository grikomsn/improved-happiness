// @ts-check

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
      animation: {
        "accordion-down": "accordion-down var(--duration,0.2s) ease-out",
        "accordion-up": "accordion-up var(--duration,0.2s) ease-out",
        beams: "fade-in 0.8s ease-out, beams 30s linear infinite",
        "polaroid-enter": "polaroid-enter 0.8s cubic-bezier(0.08,0.82,0.17,1)",
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
        beams: {
          from: { filter: "hue-rotate(0deg)" },
          to: { filter: "hue-rotate(360deg)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "polaroid-enter": {
          from: { opacity: "0", transform: "translateX(200%) rotate(30deg)" },
          to: { opacity: "1", transform: "translateX(0%) rotate(1deg)" },
        },
      },
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
