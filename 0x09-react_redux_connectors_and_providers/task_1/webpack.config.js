const path = require('path');

module.exports = {
  entry: './dashboard/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development'
};

