/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#55B7B0',
        dark: '#303534',
        bgLight: '#F7F8F6',
      }
    },
  },
  plugins: [],
}