module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      vibur: ["Vibur", "cursive"],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
