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
        shade3: "#8ca4ac",
        shade5: "#547484",
        shade6: "#8c9cac",    
        secondary: "#041525",
      },
      spacing: {
        '9rem': '9rem', // Adds a custom spacing utility
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
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '30%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0%)', opacity: '1' },
        },
        maskReveal: {
          '0%': { transform: 'translateX(0%)' },      // Mask fully covers the image
          '100%': { transform: 'translateX(100%)' }, // Mask moves off-screen to the left
        },
        maskRevealBio: {
          '0%': { transform: 'translateX(0%)' },      // Mask fully covers the image
          '100%': { transform: 'translateX(-100%)' }, // Mask moves off-screen to the left
        },
        maskRevealSche: {
          '0%': { transform: 'translateX(0%)' },      // Mask fully covers the image
          '50%': { transform: 'translateX(100%)' }, // Mask moves off-screen to the left
          '100%': { transform: 'translateX(100%)' },      // Mask fully covers the image
        },
        zoomOut: {
          '0%': { transform: 'scale(1.1)' },          // Slightly zoomed in
          '100%': { transform: 'scale(1)' },          // Zooms out to normal size
        },
        fadeIn: {
          '0%': { opacity: '0' },   // Set opacity only, no transform here
          '50%': { opacity: '0' },   // Set opacity only, no transform here
          '100%': { opacity: '1' }, // Ends with opacity fully visible
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        zoomInAb: {
          '0%, 100%': { transform: 'scale(1)' },          // Slightly zoomed in
          '50%': { transform: 'scale(1.1)' },          // Zooms out to normal size
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-out forwards',
        slideInFromRight: 'slideInFromRight 1.5s ease-out forwards',
        maskReveal: 'maskReveal 2.5s ease-out forwards', 
        maskRevealBio: 'maskRevealBio 2.5s ease-out forwards', // Adjust duration as needed
        zoomOut: 'zoomOut 2.5s ease-out forwards',    // Match duration with maskReveal
        maskRevealSche: 'maskRevealSche 5s ease-out forwards',// Adjust duration as needed
        fadeIn: 'fadeIn 5s ease-out  forwards',
        float: 'float 2s ease-in-out infinite',
        zoomInAb: 'zoomInAb 8s ease-in-out  infinite',       // Match duration with maskReveal
        'spin-slow': 'spin 30s  linear infinite',  // Slower 3-second rotation
        scroll: 'scroll 20s linear infinite', // Animation name and timing


      },

    },
  },
  plugins: [
    
  ],
}
