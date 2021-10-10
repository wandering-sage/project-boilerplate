var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require("./paths");

module.exports = {
	// Where webpack looks to start building the bundle
	entry: [paths.src + "/index.js"],

	// Where webpack outputs the assets and bundles
	output: {
		path: paths.build,
		filename: "[name].bundle.js",
		publicPath: "/",
	},
	module: {
		rules: [
			// JavaScript: Use Babel to transpile JavaScript files
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			// Images: Copy image files to build folder
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},

			// Fonts and SVGs: Inline files
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	plugins: [

		// Copies files from target to destination folder
		new CopyWebpackPlugin({
			patterns: [
				{
					from: paths.public,
					to: "assets",
					globOptions: {
						ignore: ["*.DS_Store"],
					},
					noErrorOnMissing: true,
				},
			],
		}),

		// Generates an HTML file from a template
		new HtmlWebpackPlugin({
			favicon: paths.src + "/images/favicon.png",
			template: paths.src + "/template.html", // template file
			filename: "index.html", // output file
		}),
	],
};
