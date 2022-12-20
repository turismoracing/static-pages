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
    extend: {
      keyframes: {
        side: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
           },

           "100%": {
            transform: "translateX(0)",
            opacity: 1,
           },
        },
      },
      animation: {
          "from-the-side": "side 1.7s ease 0",
      },
    },
  },
  plugins: [],
}
