import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./wrapper/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E1F2FF",
          100: "#C8E7FE",
          200: "#90CEFD",
          300: "#59B6FD",
          400: "#219CFC",
          500: "#0387EC",
          600: "#036BBA",
          700: "#02518D",
          800: "#013760",
          900: "#011A2D",
          950: "#000E19",
        },
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
