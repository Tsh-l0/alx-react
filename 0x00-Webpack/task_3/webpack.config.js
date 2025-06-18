const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		header: { import: './modules/header/header.js', dependOn: 'shared' },
		body: { import: './modules/body/body.js', dependOn: 'shared' },
		footer: { import: './modules/footer/footer.js', dependOn: 'shared' },
		shared: 'jquery',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, './public'),
		open: true,
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
