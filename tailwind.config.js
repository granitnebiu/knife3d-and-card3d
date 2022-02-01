module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      colors: {
        pink: "#F05483",
        orange: "#FBA919",
        lightblue: "#25166c",
        darkblue: "#01023a",
        violet: "#5e3fde",
      },
      spacing: {
        "280px": "280px",
        "560px": "560px",
      },
      fontSize: {
        "150px": "150px",
      },
    },
  },
  plugins: [],
};
