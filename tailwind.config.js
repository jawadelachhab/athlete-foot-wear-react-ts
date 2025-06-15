/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        roboto: ['Roboto', 'serif']
      },
      colors: {
        "primary": "#FF324D",
        "dark": "#292b2c",
        "white": "#fff",
        "light": "#f2f2f2",
        "secondary": "#687188",
        "success": "#61B50D",
        "warning": "#ffc315",
        "danger": "#f00"
      },
      boxShadow: {
        'card': '0 0 7px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}