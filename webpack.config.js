const path = require('path');

module.exports = {
  context: path.join(__dirname, './'),
  entry: ['whatwg-fetch', './app/app.jsx'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'jsx-loader',
        exclude: /node_modules/,
      },
      
    ],
  }
};