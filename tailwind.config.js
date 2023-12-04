/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
    "./src/components/*.vue",
    "./src/views/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}