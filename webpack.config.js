const { join } = require("path");

const Glob = require("glob");

const { htmlWebpackPluginTemplateCustomizer } = require("template-ejs-loader");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const HTMLWbpackPlugin = require("html-webpack-plugin");

const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const webpack = require("webpack");

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
        port: 3000,
        host: "localhost",
        startPath: "pages",
        server: { baseDir: ["build"] },
      }),
      ...(await Glob.sync("pages/**/*.ejs").map((path) => {
        return new HTMLWbpackPlugin({
          template: htmlWebpackPluginTemplateCustomizer({
            templatePath: path,
          }),
          minify: false,
          filename: path.replace("ejs", "html"),
        });
      })),

      new MiniCssExtractPlugin({
        filename: "./style/[name].css",
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  };
};
