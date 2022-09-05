/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: 'source-sans-pro, open-sans, sans-serif',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        eletricblue: '#009cd8',
        ballblue: '#28a2d1',
        granite: '#656464',
      },
    },
  },
  plugins: [],
};
