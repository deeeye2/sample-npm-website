const path = require('path');

module.exports = {
  entry: './src/app.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
