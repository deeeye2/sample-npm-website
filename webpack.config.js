const path = require('path');

module.exports = {
  mode: 'development', // Use 'development' for debugging
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve files from 'public'
    },
    port: 9000,
    open: true,
  },
};


