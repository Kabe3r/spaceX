/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,png}", './public/index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('./images/img.jpg')"
      }
    },
  },
  plugins: [],
}
