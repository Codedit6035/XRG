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
        shade1: "#1c445c",
        shade2: "#c9d4d8",
        shade5: "#547484",
        
        
        secondary: "#041525",
      },
      spacing: {
        '6rem': '9rem', // Adds a custom spacing utility
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },

      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero/oussema')", // Ensure this path is correct
      },
      fontFamily: {
        custom: ['Vollkorn'], // Replace "Roboto" with your font name
        cormorant: ['Cormorant'],
        ibm: ['IBM Plex Serif'],
        mulish: ['Mulish'],
        raleway: ['Raleway'],
        IBMPlexSerif: ['IBMPlexSerif-Light', 'sans-serif'], // Corrected font-family
      },
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-400px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        maskReveal: {
          '0%': { transform: 'translateX(0%)' },      // Mask fully covers the image
          '100%': { transform: 'translateX(100%)' }, // Mask moves off-screen to the left
        },
        zoomOut: {
          '0%': { transform: 'scale(1.1)' },          // Slightly zoomed in
          '100%': { transform: 'scale(1)' },          // Zooms out to normal size
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-out forwards',
        maskReveal: 'maskReveal 2.5s ease-out forwards', // Adjust duration as needed
        zoomOut: 'zoomOut 2.5s ease-out forwards',       // Match duration with maskReveal
        float: 'float 2s ease-in-out infinite',

      },
    },
  },
  plugins: [],
}
