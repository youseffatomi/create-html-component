const { join } = require("path");

const Glob = require("glob");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const HTMLWbpackPlugin = require("html-webpack-plugin");

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = async ({ mode }) => {
  const isDev = mode === "development" ? true : false;

  return {
    stats: isDev ? "errors-warnings" : "normal",
    entry: "./script/main.js",

    output: {
      filename: "./script/main.js",
      path: join(__dirname, "build"),
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.(png|jpg|jpge|svg)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/images/[name][ext]",
          },
        },
        {
          test: /\.(ttf|woff|woff2|eot)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/fonts/[name][ext]",
          },
        },
        {
          test: /\.(s[ac]ss|css)$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.ejs$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: false,
              },
            },
            "template-ejs-loader",
          ],
        },
      ],
    },

    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },

    plugins: [
      new BrowserSyncPlugin({
        host: "localhost",
        port: 3000,
        server: { baseDir: ["build"] },
        files: "**/*.ejs",
      }),
      ...(await Glob.sync("pages/**/*.ejs").map((path) => {
        let path1 = path.split("/");
        path1 = path1[path1.length - 1];
        return new HTMLWbpackPlugin({
          template: path,
          minify: false,
          filename: path1.replace("ejs", "html"),
        });
      })),

      new MiniCssExtractPlugin({
        filename: "./style/[name].css",
      }),
    ],
  };
};
