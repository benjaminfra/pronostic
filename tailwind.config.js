/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        "dark-night-blue": "rgb(20, 30, 48)",
        "dark-moderate-blue": "rgb(36, 59, 85)",
      },
    },
  },
  plugins: [],
};
