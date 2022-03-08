const { colors } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./public/**/*.{html,js,jsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'indigo': colors.indigo,
        'purple': colors.purple,
        'blue': colors.blue,
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
