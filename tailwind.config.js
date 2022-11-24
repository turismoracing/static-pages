/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./**/*.{html,js}"
    ],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
