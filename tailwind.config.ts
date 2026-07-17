import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "porcelain": "#F5F8F7",
        "porcelain-dark": "#E5E5E5",
        "olivine": "#96B478",
        "olivine-dark": "#6B8E23",
        "buttercup": "#F4BD1B",
        "buttercup-dark": "#D4A017",
        "spicy-mix": "#906545",
        "spicy-mix-dark": "#7B4D3A",
        "steel-grey": "#1B1C2A",
        "steel-grey-dark": "#0F0F1A",
      },
      fontFamily: {
        bpmf: ['var(--font-bpmf)', 'inter'],
      },
      keyframes: {
        "fade-down": {
          from: {
            opacity: "0",
            transform:
              "translate(var(--tw-translate-x), -1rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
          to: {
            opacity: "1",
            transform:
              "translate(var(--tw-translate-x), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
        },
        "fade-up": {
          from: {
            opacity: "1",
            transform:
              "translate(var(--tw-translate-x), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
          to: {
            opacity: "0",
            transform:
              "translate(var(--tw-translate-x), -1rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
          },
        },
      },
      animation: {
        "fade-down": "fade-down 0.2s linear",
        "fade-up": "fade-up 0.2s linear",
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
