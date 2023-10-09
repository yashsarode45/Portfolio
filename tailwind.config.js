module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        pink: "#dc2c5a",
        "purple-bg": "#242635",
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          50: "#C5C7D4",
          100: "#AFB2BF",
          200: "#999DAA",
          300: "#838894",
          400: "#6E727F",
          500: "#585D69",
          600: "#424854",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px",
      },
      fontFamily: {
        dela_gothic: ["Dela Gothic One", "cursive"],
        inconsolata: ["Inconsolata", "monospace"],
        young_serif: ["Young Serif", "serif"],
        kanit: ["Kanit", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      screens: {
        xs: "450px",
        xxs: "300px",

        "md-870": "870px",
      },
    },
  },
  plugins: [],
};
