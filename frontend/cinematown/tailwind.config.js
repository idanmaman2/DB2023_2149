/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      colors: {
        transparent: 'transparent',
        mainColor: "#adb5bd", 
        mainBG:"#212529",
        secondColor:"#6c757d", 
        thirdColor:"#495057" , 
        fourthColor:"#343a40",
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        orange:colors.orange ,
        red:colors.red ,
        blue:colors.blue ,
      },
    extend: {},
  },
  plugins: [
  ],
}