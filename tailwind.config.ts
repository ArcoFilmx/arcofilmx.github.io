import type { Config } from "tailwindcss";
import { wedgesTW } from "@lemonsqueezy/wedges";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@lemonsqueezy/wedges/dist/esm/index.js",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [wedgesTW()],
};

export default config;
