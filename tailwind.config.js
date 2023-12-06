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
        'card': '0px 20px 60px rgba(0, 0, 0, 0.1);'
      },
      borderRadius : {
        'circular': '50%',
      },
      spacing: {
        'square-25-vw': '25vw',
        'square-20-vw': '20vw',
          '120%': '115%',
          '60%': '52%',
          '40%': '40%'
      },
      colors: {
        primary: '#3B38E8',
        primaryDark: 'rgba(40, 69, 162, 1)',
        textLight: '#3A3A3A',
        lightText: '#F4F6FC',
        gradStart: 'rgba(123, 97, 255, 1)',
        gradEnd: 'rgba(123, 97, 255, 0.71)',
        label: '#2845A2'
      },
      screens: {
        'mob': { 'raw': 'only screen and (max-width: 768px)' }
      }
    },
  },
  plugins: [],
}
