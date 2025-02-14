import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moonlitMist: "#DBD8E3",
        duskLilac: "#5C5470",
        midnightPlum: "#352F44",
        twilightShadow: "#2A2438",
      },
    },
  },
  plugins: [],
} satisfies Config;
