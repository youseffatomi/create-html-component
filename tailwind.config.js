/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.ejs", "./components/**/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        'primary' : "iransans",
        'title': "peyda"
      },


      container: {
        center: true
      },


      colors: {

        "primary"     : "#FFCE06",
        "primary-2"   : "#FEB412",
        "primary-text": "#FF820E",
        "secondary"   : "#1084FF",
        "secondary-2" : "#1272D8",
        "light"       : "#F5F5F5",

        dark: {
          default : "$#000",
          80: "rgba(0, 0, 0, 0.8)",
          50: "rgba(0, 0, 0, 0.5)",
          30: "rgba(0, 0, 0, 0.3)",
          20: "rgba(0, 0, 0, 0.2)",
          10: "rgba(0, 0, 0, 0.1)",
        }

      },



      backgroundImage: {
        'header-pattern': "url('/assets/images/patterns/header-pattern.png')",
        "category-pattern": "url('/assets/images/patterns/category-pattern.png')",
        "product-section-pattern": "url('/assets/images/patterns/product-section-pattern.png')",
        "home-about": "url('/assets/images/home/about-background.png')",
        "footer-pattern": "url('/assets/images/patterns/footer-pattern.png')",
      },
      

      boxShadow: {
        'search': "0px 1px 16px rgba(0, 0, 0, 0.08)"
      },

      zIndex:  {
        1: '1',
        "-1" : "-1"
      },


      borderRadius: {
        '4xl' : "1.75rem",
        '5xl' : "2rem",
      }


    },
  },
  plugins: [],
};
