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
        slideInFromRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(300px) scale(1.05)', // Starts off-screen to the right and slightly zoomed in
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0) scale(1)', // Ends in normal position and size
          },
        },
      },
      animation: {
        slideInFromRight: 'slideInFromRight 1.5s ease-out forwards', // Corrected animation name to match keyframe name
        slideInFromLeft: 'slideInFromLeft 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
