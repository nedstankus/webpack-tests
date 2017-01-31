var webpack = require("webpack");
var CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
	entry: {
		main: "./src/main.js",
		//vendor: ["jquery"]
	},
	output: {
		path: "./dist/",
			filename: "bundle.js"
		//library: "heythere",
		//libraryTarget: "var"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['es2015']
				}
			 }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			GARBAGE: JSON.stringify("asdfasjdflaksdjf23234")
		}),
		//new CommonsPlugin({
		//	minChunks: 3,
		//	name: "common"
		//}),
		//new CommonsChunkPlugin({
		//	minChunks: Infinity,
		//	filename: 'vendor.js',
		//	name: "vendor"
		//})
	]
}