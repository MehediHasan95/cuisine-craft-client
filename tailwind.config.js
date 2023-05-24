/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      colors: {
        yellowOrange: "#FD9800",
        erieBlack: "#1B1B1B",
      },
      backgroundColor: {
        yellowOrange: "#FD9800",
        erieBlack: "#1B1B1B",
      },
    },
  },
  plugins: [require("daisyui")],
};
