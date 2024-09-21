/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueOne: "#001355",
        blueSecondary: "#001255af",
      },
      fontFamily: {
        merriweather: "serif",
        poppins: "sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
