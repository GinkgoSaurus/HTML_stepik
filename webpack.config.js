const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development',
    module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template
      filename: 'index.html', // Name of the output HTML file
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Specify the name for the compiled CSS file
    }),
  ],
  devServer: {
    static: './dist', // Serve static files from the 'public' directory
    port: 8080, // Specify the port you want the server to run on
  },
};