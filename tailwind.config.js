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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Tailwind doesn’t have built-in support for border-image.
        // Thus, use the @layer utilities feature to add a custom utility class
        '.overlay': {
          borderImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)) fill 1',
        },
      });
    },
  ],
}