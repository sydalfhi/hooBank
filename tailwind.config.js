/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    theme: {
      screens: {
        smini: "320px",
        mini: "375px",
        sedang: "412px",
        large: "688px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      extend: {
        fontFamily: {
          popin: ["Poppins"],
          bil: ["Billabong"],
        },
        colors: {
          biru: "#11bbd1",
        },
      },
    },
  },
  plugins: [],
};
