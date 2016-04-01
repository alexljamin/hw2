module.exports = {
//   entry: '/main.js',
  entry: 'lib/react-forms.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
      
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['react','es2015'],
        },
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        // include: /.*\.js/,
        loader: 'jsx-loader?harmony',
        query: {
          presets: ['react','es2015'],
        },
        exclude: /node_modules/
      }
    ]
  },
  
  devServer:{
      port: 3000
  }
};