import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1f1f1",
        secondry: "#212121",
      },
    },
    fontFamily: {
      montreal: ["Montreal", "sans-serif"],
      FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
      NeueMontreal: ["NeueMontreal", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config;
