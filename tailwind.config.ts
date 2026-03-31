import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EDF5",
          100: "#C5D2E8",
          200: "#8FA8CC",
          300: "#5A7DB0",
          400: "#2E5694",
          500: "#1E3A8A",
          600: "#162C6B",
          700: "#0E1F4D",
          800: "#0A1628",
          900: "#060D18",
        },
        gold: {
          DEFAULT: "#F59E0B",
          50: "#FEF9EC",
          100: "#FDF0C8",
          200: "#FBE18F",
          300: "#F9CC56",
          400: "#F7B823",
          500: "#F59E0B",
          600: "#C47D08",
          700: "#935D06",
          800: "#623D04",
          900: "#311E02",
        },
        sky: {
          DEFAULT: "#38BDF8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
