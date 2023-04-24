/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#342B6C",
          secondary: "#57B584",
          accent: "#57B584",
          neutral: "#ffffff",
          "base-100": "#121826",
          info: "#303152",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      serif: ["Bree Serif", "ui-sans-serif"],
      sans: ["Montserrat", "ui-sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
