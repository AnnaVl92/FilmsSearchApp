const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.js',
	
	devtool: 'source-map',
	
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'src'),
	},
	
	resolve: {
		extensions: ['.js', '.jsx']
	},
	
	module: {
		rules: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader'
			}
		]
	},
	
	plugins: [new HtmlWebpackPlugin(
		{
			template: "./index.html"
		}
	)],
	
	watch: false
};