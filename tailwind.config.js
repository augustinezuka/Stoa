/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native");
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#e0f7fa",
        primary: "#e6f0ff",
        secondary: "#004c99",
        softGray: "#f0f0f0",
        darkGray: "#333333",
        brightAccent: "#ff7043",
        successGreen: "#00c853",
        alertRed: "#d32f2f",
        infoYellow: "#fff176",
        mutedBlue: "#90caf9",
        steelBlue: "#4682b4",
        lightCoral: "#f08080",
        tealGreen: "#00897b",
        lavenderPurple: "#b39ddb",
        lightPeach: "#ffccbc",
        slateGray: "#78909c",
        softGold: "#ffeb3b",
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss"), require("nativewind/postcss")],
};

