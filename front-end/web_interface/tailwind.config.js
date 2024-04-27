/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'selector',

  theme: {
   
    fontFamily: {
      'body': "Steelfish"
    },
    extend: {
      colors: {
        // flowbite-svelte
        beigehell: '#ffffef',
        beigedunkel: '#ECE6D2',
        primary: {
          50: '#ebfef7',
          100: '#d0fbe9',
          200: '#a4f6d7',
          300: '#6aebc3',
          400: '#2fd8a9',
          500: '#0abf93',
          600: '#009b79',
          700: '#00755e',
          800: '#03624f',
          900: '#045043',
          950: '#012d27',
        }
      }
    }
  }
};

module.exports = config;