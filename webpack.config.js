var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss      = require('precss');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/index.js'
  ],
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
    new ExtractTextPlugin('app.css')
  ],
  postcss: function () {
    return [autoprefixer, precss]
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!postcss-loader")},
      {
        test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
