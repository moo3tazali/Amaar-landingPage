import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#53AB9C",
        commentText: "#66686F",
        commentTextDark: "#BDBCBC",
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
export default config;
