const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/**
 * @type {import('webpack').Configuration}
 */
const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        use: ["MiniCssExtractPlugin.loader", "css-loader", "sass-loader"],
        test: /\.(css|sass|scss)$/,
      },
    ],
  },
};

module.exports = merge(common, prodConfig);
