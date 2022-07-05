/** @type {import('tailwindcss').Config} */

const blur = "./src/images/blur-background.png";

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: `url(${blur})`
      },
      fontFamily: {
        sans: 'Roboto, sans-sefif'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        }
      },
    },
    screens: {
      'mobile': {'min': "100px", 'max': "1150px" },
      'pattern': { 'min': '1150px', 'max': '1500px' },
    },
  },
  plugins: [],
};