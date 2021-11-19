module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '1/4': '200px'
    }
    },
  variants: {
    extend: {}
  },
  plugins: [],
}
