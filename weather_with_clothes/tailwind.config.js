/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    'mobile': '375px',
    colors: {
      fontWhite: "#FFFFFF"
    }
  },
  plugins: [],
}

