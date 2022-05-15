const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'default': '0px 20px 40px rgba(157, 157, 157, 0.2)',
      },
      colors: {
        primary: '#3B38E8',
        textLight: '#3A3A3A',
        gradStart: 'rgba(123, 97, 255, 1)',
        gradEnd: 'rgba(123, 97, 255, 0.71)'
      }
    },
  },
  plugins: [],
}
