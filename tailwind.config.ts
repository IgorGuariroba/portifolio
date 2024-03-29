import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      t: "0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      orange: "0px 20px 20px -15px rgba(245,56,56,0.81) ",
      "green-md": "0px 20px 40px -15px rgba(13, 183, 96, 0.81)",
      none: "none",
    },
    colors: {
      transparent: "transparent",
      black: {
        900: "#000000",
        500: "#4F5665",
        600: "#0B132A",
      },
      orange: {
        100: "#FFECEC",
        500: "#F53855",
      },
      green: {
        100: "#45C785",
        200: "#3BBC79",
        300: "#31B16D",
        400: "#27A661",
        500: "#2FAB73",
        600: "#278D61",
        700: "#206F50",
        800: "#19503E",
        900: "#11322C",
        main: "#0DB760",
      },
      white: {
        main: "#ffffff",
        100: "#ffffff",
        300: "#F8F8F8",
        500: "#fff",
      },
      gray: {
        50: "#F9FAFB",
        100: "#EEEFF2",
        200: "#CACFD2",
        300: "#A6AAB2",
        400: "#AFB5C0",
        500: "#DDDDDD",
        800: "#2D3748",
        900: "#1A202C",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      boxShadow: ["active", "hover"],
    },
  },
  plugins: [],
};
export default config;
