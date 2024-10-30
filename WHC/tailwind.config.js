/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': {'min': '920px'}, // Custom max-width for 920px
      },
    },
  },
  plugins: [],
}