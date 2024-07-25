import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        stitched: 'inset 0 0 0 2px dashed #7d7d7d',
      },
      fontFamily: {
        'big-caslon': ['"Big Caslon"', 'serif'],
        'georgia-italic': ['Georgia', 'serif', 'italic'],
      },
    },
  },
  plugins: [],
};
export default config;
