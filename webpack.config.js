const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  'entry': {
    'app': [
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:8000',
      'webpack/hot/only-dev-server',
      './app/index'
    ]
  },
  'devtool': 'source-map',
  'output': {
    'path': path.join(__dirname, '/public/'),
    'filename': 'bundle.js',
    'publicPath': '/'
  },
  'plugins': [
    new ExtractTextPlugin({filename: 'style.css', 'allChunks': true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'

    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
    new webpack.DefinePlugin({
      'require.specified': 'require.resolve'
    })
  ],
  'module': {
    'noParse': '//g',
    'loaders': [
      {
        'test': /\.js$/,
        'loaders': ['react-hot-loader', 'babel-loader'],
        'include': path.join(__dirname, 'app')
      },
      {
        'test': /\.scss$/,
        'loaders': ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      },
      {
        'test': /\.css$/,
        'loader': ExtractTextPlugin.extract({use: 'css-loader', fallback: 'style-loader'})
      },
      {
        'test': /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        'loader': 'url-loader?limit=100000'
      },
      {
        'test': /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        'loader': 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        'test': /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        'loader': 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};

module.exports = config;
