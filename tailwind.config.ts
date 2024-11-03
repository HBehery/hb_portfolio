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
        dark: "#7A594B",
        dark_hover: "#9B796A",
        light: "#755142",
        light_hover: "#AC8C7E",
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
