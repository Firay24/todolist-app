/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'basic-blue': '#16ABF8',
        'blue-dark': '#0799e4ff',
      },
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
