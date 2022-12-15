module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 'media' or 'class'
  theme: {
    screens: {
      md: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1530px",
      "3xl": "1740px",
    },

    letterSpacing: {
      custom: "3.125em",
      expand: "3px",
      vWide: "10px",
      exp: "2px",
    },
    backgroundPosition: {
      "right-4": "center right 1rem",
      center: "center",
    },
    fontSize: {
      xxs: "0.6rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },

    extend: {
      margin: {
        lr: "40rem",
      },
      backgroundImage: (theme) => ({
        choose: "url('/images/choose-bg.svg')",
        chevronDownDark: "url('/images/chevron-down-dark.svg')",
        paymentCard: "url('/images/payment-small.svg')",
        chevronDownLight: "url('/images/chevron-down-light.svg')",
        paymentWhite: "url('/images/ccv-white.svg')",
      }),

      width: {
        100: "6.25rem",
        82.5: "1320px",
        37.5: "600px",
        18.7: "300px",
        17: "4.75rem",
        354: "22.125rem",
        side: "480px",
        bottom: "4.95rem",
        preset: "20rem",
        grow: "80%",
      },
      height: {
        100: "6.25rem",
        17: "4.55rem",
        bottom: "4.95rem",
        expand: "709.8px",
        22: "5.54rem",
        85: "82vh",
        90: "88vh",
        70: "78vh",
      },
      colors: {
        "accent-1": "#333",
        "bg-light": "#F4F4F4",
        "gray-light": "#707070",
        "bd-light": "#EAEAEA",
        "gray-hover": "#BEBEBE",
        "bd-lighter": "#EFEFEF",
        "lime-dark": "#A9B039",
        "green-1": "#2D9E47",
        "yellow-dark": "#E0AB0F",
        "gray-1": "#898989",
        "gray-2": "#D6D6D6",
        "purple-1": "#B48AC1",
        "gray-2": "#D0D0D0",
        "dark-1": "#121212",
        "dark-2": "#0A0A0A",
        "dark-3": "#222222",
        "purple-dark": "#4D385B",
        "green-dark": "#385846",
      },
      inset: {
        100: "32rem",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      width: ["hover", "focus", "group-hover"],
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      overflow: ["hover", "focus"],
    },
  },
  plugins: [],
};
