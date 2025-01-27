/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: { backgroundImage: {
      'wedding': "url('./assets/Images/Wedding/background.png')"
    },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          flip: {
            '0%': { transform: 'rotateY(0deg)' },
            '50%': { transform: 'rotateY(180deg)' },
            '100%': { transform: 'rotateY(360deg)' },
          },
          'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        }
        },
        animation: {
          fadeIn: 'fadeIn 1s ease-in-out',
          flip: 'flip 1s ease-in-out',
          "slide-down": 'slide-down 0.3s ease-out'
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
  plugins: [require("tailwind-scrollbar")],
}

