module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        brand: "#FF385C",
        primeBlack: "#222222",
        borderColor: "#DDDDDD ",
        footerBg: "#F7F7F7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
