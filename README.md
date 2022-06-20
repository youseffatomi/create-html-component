# create-html-component

## Get start

```sh
git clone https://github.com/youseffatomi/create-html-component.git
cd create-html-component
npm i
npm start
```

### create pages with ejs

```sh
pages -> index.ejs
```

### you can import components with ejs

```sh
<!DOCTYPE html>
<html lang="en">
  <%- include("./../components/layout/head") %>
  <body></body>
</html>
```

### so you can use tailwindcss and sass or scss

```sh
scss-> main

@import "./font.scss";
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

```

## webpack

### unMinify css

If you want to disable minify csss , you must delete this

```sh
optimization: {
   minimizer: [new CssMinimizerPlugin()],
},
```

### change build directory name

```sh
devServer: {
   static: {
      directory: join(__dirname + `"build"`),
   },
},
```

### change port serve

```sh
devServer: {
   port:`3000`
},
```

## Tailwindcss

### change font family name

```sh
tailwind.config.js

fontFamily: {
   sans: ["FontWeb"],
},

```
