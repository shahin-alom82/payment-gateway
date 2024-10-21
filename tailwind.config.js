/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: "#050814",
        textColor: "#35bbcf",
        lightText: "#fffeff"
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"]
      }

    },
  },
  plugins: [],
}