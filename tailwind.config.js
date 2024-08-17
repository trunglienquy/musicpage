/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inspiration': ['Inspiration', 'cursive'],
        'oswald': ['Oswald', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'josefinSans': ['Josefin Sans', 'sans-serif'],
        'matemasie': ['Matemasie', 'sans-serif'],
      },
      translate: {
        '--1/2': '-50%',
        '--7/10': '-70%',
      },
    },
  },
  plugins: [],
}

