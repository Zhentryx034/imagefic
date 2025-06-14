/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        castoro:['"Castoro Titling"','serif'],
        roboto:['"Roboto"','serif']
      },
    },
  },
  plugins: [],
}

