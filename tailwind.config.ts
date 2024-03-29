import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
// const colors = require("tailwindcss/colors");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
    },
  },
  plugins: [],
} satisfies Config;
