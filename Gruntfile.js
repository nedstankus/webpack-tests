module.exports = function(grunt) {

	var webpack = require("webpack");
	//var webpackConfig = require("./webpack.config.js");

	grunt.initConfig({
		webpack: {
			build: {
				entry: "./src/main.js",
				output: {
					path: "./dist/",
					filename: "bundle.js"
					//library: "heythere",
					//libraryTarget: "var"
				},
				module: {
					loaders: [
						{test: /\.css$/, loader: "style!css"}
					]
				},
				plugins: [
					new webpack.DefinePlugin({
						GARBAGE: JSON.stringify("asdfasjdflaksdjf23234")
					})
				]
			}
		},
		watch: {
			app: {
				files: ["./src/*.js"],
				tasks: ["webpack:build"],
				options: {
					spawn: false
				}
			}
		}
	});

	// The development server (the recommended option for development)
	//grunt.registerTask("default", ["webpack-dev-server:start"]);

	// Build and watch cycle (another option for development)
	// Advantage: No server required, can run app from filesystem
	// Disadvantage: Requests are not blocked until bundle is available,
	//               can serve an old app on too fast refresh
	grunt.registerTask("dev", ["watch:app"]);
	grunt.loadNpmTasks("grunt-webpack"); // call webpack from here instead of the shell

	// Production build
	//grunt.registerTask("build", ["webpack:build"]);

	grunt.loadNpmTasks('grunt-contrib-watch');

};