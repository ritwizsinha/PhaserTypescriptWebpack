const path = require('path');

module.exports = {
  entry: './src/app.ts',
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: [".ts"]
  },
  module: {
      rules: [
      {
          test: /\.ts$/,
          loader: "ts-loader"
      },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
      ]
  }
};