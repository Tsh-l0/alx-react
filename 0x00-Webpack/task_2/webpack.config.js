const path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/dashboard_main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		assetModuleFilename: 'assets/[name][ext]'
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name]-[hash].[ext]',
							outputPath: 'assets/',
							publicPath: 'assets/'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: { progressive: true },
							optipng: { enabled: true },
							gifsicle: { interlaced: false },
							webp: { quality: 75 }
						}
					}
				]
			}
		]
	},
	performance: {
		maxAssetSize: 500000
	}
};
