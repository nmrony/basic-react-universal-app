var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(process.cwd(), 'client-render.js'),
    vendor: ["react", "react-dom", "react-router", "material-ui", "history"]
  },
  output: {
    path: './public/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
