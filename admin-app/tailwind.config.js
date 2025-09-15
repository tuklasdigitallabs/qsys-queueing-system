/** @type {import('tailwindcss').Config} */
module.exports = {
  // Reuse our shared brand tokens (colors, fonts) per source-of-truth
  presets: [require('../shared/tailwind.preset.js')],
  // Scan EJS views and any client JS for class names
  content: [
    './views/**/*.ejs',
    './**/*.ejs',
    './public/**/*.js'
  ]
};
