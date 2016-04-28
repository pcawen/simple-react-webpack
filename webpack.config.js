var webpack = require("webpack");

module.exports = {
  //context: __dirname + "/src",
  entry: "./main.js",
  output: {
  	path: __dirname + "/dist",
  	filename: "bundle.js"
  },
  module: {
  	loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets:['react','es2015']}}
  	]
  },
  plugins: [
    new webpack.DefinePlugin({
	  "process.env": {
	    NODE_ENV: JSON.stringify("develop")//production
	  }
	})
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};