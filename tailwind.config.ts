import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        stitched: 'inset 0 0 0 2px dashed #7d7d7d', // Custom stitched effect box shadow
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
