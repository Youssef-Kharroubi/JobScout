/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        border: 'background ease infinite',
      },
      keyframes: {
        background: {

        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};


