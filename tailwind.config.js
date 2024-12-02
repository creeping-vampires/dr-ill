/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4461F2",
        background: "red",
      },
      fontFamily: {
        sans: ['"Times New Roman"', "serif"],
        serif: ['"Times New Roman"', "serif"],
      },
    },
  },
  plugins: [],
};
