const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  plugins: [
    // new ExtractTextPlugin({filename: 'testing.css', 'allChunks': true })
  ],
  module: {
    loaders: [
      {
        'test': /\.scss$/,
        'loaders': ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
        include: path.resolve(__dirname, '../')
        
      },
      {
        'test': /\.css$/,
        'loader': ExtractTextPlugin.extract({use: 'css-loader', fallback: 'style-loader'}),
        include: path.resolve(__dirname, '../')
      },
    ]
  }
}