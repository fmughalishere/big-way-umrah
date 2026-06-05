import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#d97706",
        accent: "#059669",
      },
    },
  },
  plugins: [],
};
export default config;