module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F2FFFA",
        btn: "#00EF99",
        log: "#038858",
        w: "#ffff",
      },
    },
   
    colors: {
      main: "#F2FFFA",
      btn: "#00EF99",
      mainText: "#0000",
      text: "#0000",
    },
  },
    plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
};
