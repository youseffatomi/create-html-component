/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.ejs", "./components/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["FontWeb"],
      },
    },
  },
  plugins: [],
};
