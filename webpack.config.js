module.exports = {
  mode: 'none',
  entry: './src/infrastructure/factory.js',
  output: {
    filename: 'gls.js',
    libraryTarget: 'umd',
    library: 'gls',
  },
}
