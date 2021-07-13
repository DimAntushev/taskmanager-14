const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devtool: 'source-map',

  devServer: {
    port: 3080,
    contentBase: path.join('public'),
    watchContentBase: true
  }
}
