const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: '(none)',
  entry: './src/app.js',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'app.js',
  },
  watch: false,
  devServer: {
    contentBase: `${__dirname}/dist/`
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
