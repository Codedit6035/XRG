/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1b4358",
        secondary: "#041525",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },        
      },      

      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero/oussema')",
      },
      fontFamily: {
        'IBMPlexSerif': ['IBMPlexSerif-Light (woff2), sans-serif'],
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-400px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-out forwards',
      },
      fontFamily: {
        custom: ['Vollkorn'], // Replace "Roboto" with your font name
        cormorant:['Cormorant'],
        ibm:['IBM Plex Serif'],
        Mulish:['Mulish'],
        Raleway :['Raleway']
      },
    },
  },
  plugins: [],
}

