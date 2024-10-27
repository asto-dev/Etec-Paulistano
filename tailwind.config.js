/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-blue-1000": "#000020",
        "yellow-350": "#FFBE00",
      },
      textColor: {
        "yellow-350": "#FFBE00",
        "bg-blue-925": "#171a4a",
      },
      fontFamily: {
        "primary": "Helvetica",
        "secondary": "Duru Sans"
      }
    },
  },
  plugins: [],
}