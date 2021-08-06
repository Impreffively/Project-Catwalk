const path = require ('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client', 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  mode: 'production'
};
