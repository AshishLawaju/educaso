import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "345px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        exo2: ["Exo2", "sans-serif"],
      },
    },
    colors: {
      primary: "#09117c",
      secondary: "#ecb212",
      heading: "#141414",
      "sub-heading": "#3b3b3b",
      paragraph: "#484747",
      "span-black": "#a3a3a3",
      "span-white": "#e2e2e2",
      background: "#efeded",
    },
  },
  plugins: [],
};
export default config;
