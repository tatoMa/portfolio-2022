module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        updown: {
          "0%": { transform: "translateY(75%)" },
          "100%": { transform: "translateY(-75%)" },
        },
        updown2: {
          "50%": { transform: "translateY(75%)" },
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-75%)" },
        },
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
