/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f8f4eb",
        "gray-50": "##e6fff2",
        "gray-100": "#ccffe5",
        "gray-500": "#003319",
        "primary-100": "#00b356",
        "primary-300": "#00994a",
        "primary-500": "#004c25",
        "secondary-400": "#33ff95",
        "secondary-500": "#00ff7b",
      },
      backgroundImage: (theme) => ({
        "gradient-yellow-red":
          "linear-gradient(90deg, #ff616a 0%, #ffc837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};