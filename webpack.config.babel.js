import path from 'path'

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules' },
      { loader: 'json', test: /\.json$/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
