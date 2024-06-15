// eslint-disable-next-line no-undef
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1E63AE',
          hover: '#1C5CBF'
        },
        fontColor: {
          DEFAULT: '#3C3C3C'
        }
      },
      fontSize: {
        mobile: '14px',
        tablet: '16px',
        desktop: '18px'
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
