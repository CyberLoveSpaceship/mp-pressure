import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";

const config: Config = {
  // darkMode: "class",
  content: ["src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {},
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
          },
        },
      },
    },
  },
  plugins: [Typography],
};

export default config;
