const ReactRefreshModulePlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

/**
 * @type {import('webpack').Configuration}
 */

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: '../dist',
    hot: true,
  },
  target: 'web',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.(css|sass|scss)$/,
      },
      // esta configuracion es para poder renderizar svg, pero webpack 5 ya lo hace con el type asset
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/',
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshModulePlugin()],
};

module.exports = merge(common, devConfig);
