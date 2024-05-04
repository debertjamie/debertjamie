import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fore: 'rgb(var(--foreground-rgb) / <alpha-value>)',
        back: 'rgb(var(--background-rgb) / <alpha-value>)',
        primary: 'rgb(var(--primary-color) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-color) / <alpha-value>)',
        accent: 'rgb(var(--accent-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
