/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [{
      doctorTheme: {
        primary: "#00a6d6",
        neutral: "#003865",
        secondary: "#3A4256",
        accent: "#00629b",
        "base-100": "#FFFFFF",
      }
    }]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}