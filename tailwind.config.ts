import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: { custom: ["NeueWorld", "sans-serif"] },
      colors: {
        dark: "#874727",
        dark_hover: "#B37759",
        light: "#AC6745",
        light_hover: "#CA8A6B",
        grad1dark: "#5C331E",
        grad2dark: "#AE613B",
        grad1light: "#CE9578",
        grad2light: "#B96337",
      },
    },
  },
  plugins: [],
};
export default config;
