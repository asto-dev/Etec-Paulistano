/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundColor: {
        "blue-925": "#171a4a",
        "blue-1000": "#000020",
        "yellow-350": "#FFBE00",
      },
      textColor: {
        "yellow-350": "#FFBE00",
        "blue-1000": "#000020",
        "blue-925": "#171a4a",
      },
      fontFamily: {
        "primary": "Helvetica",
        "secondary": "Duru Sans"
      }
    },
  },
  plugins: [],
}