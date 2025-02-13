/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jeju: ['JejuMyeongjo', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        roadRage: ['"Road Rage"', 'cursive'],
        alatsi: ["Alatsi", "sans-serif"],
      },
    },
  },
  plugins: [],
}

