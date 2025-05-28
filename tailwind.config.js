/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    darkMode:"class",
  theme: {
       screens: {
      sm: '300px',
      md: '500px',
      lg: '700px',
      xl: '1000px',
    '2xl': '1500px',
    },
   

   extend: {

    animation: {
      float: 'float 8s ease-in-out infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    },
    
    },
  },
  plugins: [],
}

