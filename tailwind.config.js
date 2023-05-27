/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        alabamaCrimson: "#B1002A",
        erieBlack: "#1B1B1B",
      },
      backgroundColor: {
        alabamaCrimson: "#B1002A",
        erieBlack: "#1B1B1B",
      },
    },
  },
  plugins: [require("daisyui")],
};
