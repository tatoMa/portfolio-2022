module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        updown: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
