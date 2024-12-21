/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
        keyframes: {
          flip: {
            '0%': { transform: 'rotateY(0deg)' },
            '50%': { transform: 'rotateY(180deg)' },
            '100%': { transform: 'rotateY(360deg)' },
          }
        },
        animation: {
          flip: 'flip 1s ease-in-out',
        },
        fontFamily :{
          "monsterrat":["monsterrat"],
          "monsterrat-medium":["monsterrat-medium"],
          "garamond":["garamond"],
          "poppins":["poppins"],
          "poppins-bold":["poppins-bold"],
        }
      },
  },
  plugins: [],
}

