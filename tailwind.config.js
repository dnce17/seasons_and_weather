/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        livvic: ['Livvic', 'sans-serif'],
        dancing: ['Dancing Script', 'sans-serif'],
      },
    },
  },
  plugins: [],
}