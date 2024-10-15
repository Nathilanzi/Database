// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan all relevant files in src
  theme: {
    extend: {
      colors: {
        royalBlue: '#0033A0',  // Deep royal blue
        gold: '#FFD700',        // Gold
        white: '#FFFFFF',       // White
        darkGray: '#333333',    // Dark text
        lightGray: '#f4f4f4',   // Light background shade
      },
    },
  },
  plugins: [],
};
