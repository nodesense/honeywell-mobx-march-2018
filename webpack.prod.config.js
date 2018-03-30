var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');

var BUILD_DIR = path.resolve(__dirname, 'dist');

 
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');


var config = {
  
  entry: {
    app: APP_DIR + '/Main.js' 
  }, 

  output: {
    path: BUILD_DIR,
    filename: 'bundle.[hash].js'
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
    config: JSON.stringify(require(path.join(__dirname, "production.json")))
  },
 

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("12.34")
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.[hash].js',
      minChunks:  function(module, count) {
          var context = module.context;
          return context && context.indexOf('node_modules') >= 0;
      },
   }),




   new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true, // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
      warnings: false,
    },

    sourceMap: true
  }),


    
   new HtmlWebpackPlugin({
    
    filename: 'index.html', //output file name
    template: './src/index.html' //input file
  }),



  new CopyWebpackPlugin([
    {
      from: "src/assets",
      to: "assets"
    },

    // {
    //   from: "index.html",
    //   to: "index.html"
    // }
  ]),
  ],

  devServer: {
    contentBase: APP_DIR,
    port: 8080,

    historyApiFallback: {
      index: '/'
    }

  }

};

module.exports = config;




