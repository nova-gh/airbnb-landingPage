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
