/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontWhite: "#FFFFFF",
        colorMain: "#DCF2F1",
        colorFrame: "#7FC7D9",
        colorText: "#365486",
        colorHighLight: "#0F1035"
      }
    },
    'mobile': '375px',
  },
  plugins: [
    ('tailwind-scrollbar-hide')
  ],
}

