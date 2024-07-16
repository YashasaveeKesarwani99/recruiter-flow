/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background':'#242529',
        'primary-card-background':'#37383f',
        'primary-yellow':'#FFF37A',
        'primary-grey':"#dcdcdd"
      },
      fontFamily: {
        montserrat: ['Montserrat', ]
      },
      backgroundImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

