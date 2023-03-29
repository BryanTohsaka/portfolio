/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darked: '#171717',
        green: '#d6ff01',
        gris: '#808080',
        offwhite: '#cccccc',
      },
    },
  },
  plugins: [],
}