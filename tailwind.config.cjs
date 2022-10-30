/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Playfair Display', 'sans serif']
      }
    },
  },
  plugins: [],
}
