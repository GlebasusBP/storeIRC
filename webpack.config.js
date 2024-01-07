const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/assets/js/index.js'
	},
	output: {
		clean: true,
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	devServer: {
		static: './src',
		compress: true,
		port: 9000,
		hot: true,
		open: {
			app: {
				name: 'chrome'
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(s[ac]ss|css)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(eot|ttf|woff|woff2|svg|png|jpg|jpeg|gif)$/i,
				type: "asset",
			}
		]
	},
	plugins: [
			new HtmlWebpackPlugin({
				title: 'My project',
				template: 'src/index.html',
			})
		]
}