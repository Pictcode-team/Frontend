//import webpack plugins
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

//images rules
const imgRules = {
  use: {
    loader: 'url-loader',
    options: {
      limit: 90000,
    },
  },
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
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
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[contentHash].js',
    publicPath: '',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      title: 'QR Code Transfer',
      template: './public/index.html',
    }),
  ],
};
