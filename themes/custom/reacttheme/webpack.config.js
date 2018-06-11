const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['babel-polyfill', './react/src/index.js',]
  },
  output: {
    path: path.resolve(__dirname, './react/dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
