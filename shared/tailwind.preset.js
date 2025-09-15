/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#e49424',
          secondary: '#ec9c34',
          dark: '#590e0e'
        },
        neutral: {
          700: '#3b271c',
          500: '#887b6c',
          300: '#c9a28e'
        }
      },
      fontFamily: {
        sans: ['Helvetica', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif'],
        serif: ['Garamond', 'ui-serif', 'Georgia', 'serif']
      }
    }
  },
  plugins: []
};
