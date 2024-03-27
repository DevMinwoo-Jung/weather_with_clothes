/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontWhite: "#FFFFFF"
      }
    },
    'mobile': '375px',
  },
  plugins: [],
}

