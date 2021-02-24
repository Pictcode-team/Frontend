//import webpack plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

//images rules
const imgRules = {
  type: "asset",
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
};

//babel rules
const babelRules = {
  use: "babel-loader",
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
};

//export config
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[contentHash].js",
    publicPath: "",
  },
  module: {
    rules: [babelRules, imgRules],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: "QR Code Transfer",
      template: "./public/index.html",
    }),
  ],
};
