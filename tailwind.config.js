module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"
, "./node_modules/flowbite/**/*.js",]
  ,
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    // colors: {
    //   white: {
    //     light: '#ffffff',
    //     DEFAULT: '#1fb6ff',
    //     dark: '#009eeb',
    //   },
    //   pink: {
    //     light: '#ff7ce5',
    //     DEFAULT: '#ff49db',
    //     dark: '#ff16d1',
    //   },
    //   gray: {
    //     darkest: '#1f2d3d',
    //     dark: '#3c4858',
    //     DEFAULT: '#c0ccda',
    //     light: '#e0e6ed',
    //     lightest: '#f9fafc',
    //   }
    // },
    fontFamily: {
      rubik: ["rubik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/aspect-ratio"),
    require('flowbite/plugin'),
  ],
};
