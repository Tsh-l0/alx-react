const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		header: './modules/header/header.js',
		body: './modules/body/body.js',
		footer: './modules/footer/footer.js'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, 'public'),
		port: 8564,
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'ALX Dashboard',
			templateContent: () => `
				<!DOCTYPE html>
				<html>
					<head><meta charset="UTF-8" /></head>
					<body>
						<div id="header"></div>
						<div id="body"></div>
						<div id="footer"></div>
					</body>
				</html>
			`
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
