//import webpack plugins
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

//images rules
const imgRules = {
  type: 'asset',
  test: /\.(png|jpg|jpeg|gif|svg)$/,
};

//babel rules
const babelRules = {
  test: /\.(js|jsx)$/,
  use: 'babel-loader',
  exclude: /node_modules/,
};

//typescript rules
const tsRules = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

//export config
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [babelRules, tsRules, imgRules],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      images: path.resolve(__dirname, '../src/assets/img/'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[contentHash].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: 'Pictcode',
      template: './public/index.html',
    }),
  ],
};
