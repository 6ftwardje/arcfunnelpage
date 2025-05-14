/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'arc-blue': '#00A9E0', // Example accent color from arcagency.be
        'arc-dark': '#111111', // Example dark background from arcagency.be
      }
    },
  },
  plugins: [],
} 