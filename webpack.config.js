var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

 
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 

 
   
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
 

  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loaders: [ "babel-loader"]
      },
 
    ]
  },
  
  //debug, es6 to es5 mapping
  devtool: 'source-map',

  externals: {
    config: JSON.stringify(require(path.join(__dirname, "development.json")))
  },
 

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      VERSION: JSON.stringify("12.34")
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks:  function(module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
      },
   }),

    
   new HtmlWebpackPlugin({
    
    filename: 'index.html', //output file name
    template: './src/index.html' //input file
  })
  ],

  devServer: {
    contentBase: APP_DIR,
    //port: 8080,

    historyApiFallback: {
      index: '/'
    }

  }

};

module.exports = config;




