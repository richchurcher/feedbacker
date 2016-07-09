import path from 'path'

export default {
  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel?cacheDirectory',
      test: /\.jsx?$/
    }]
  },
  devServer: {
    stats: 'errors-only'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
