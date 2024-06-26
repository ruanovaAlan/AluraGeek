/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Permanent Marker', 'cursive'],
        'body': ['Sen', 'sans-serif'],
      },
    },
  },
  plugins: [],
}