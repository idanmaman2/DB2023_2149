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
        movie_color : "#36045e"
      },
      patterns: {
        opacities: {
            100: "1",
            80: ".80",
            60: ".60",
            40: ".40",
            20: ".20",
            10: ".10",
            5: ".05",
        },
        sizes: {
            1: "0.25rem",
            2: "0.5rem",
            4: "1rem",
            6: "1.5rem",
            8: "2rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            32: "8rem",
        }
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}