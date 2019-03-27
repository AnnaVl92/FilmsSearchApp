const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './app.js',
	
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
			},
			{
				test:/\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	
	plugins: [new HtmlWebpackPlugin(
		{
			template: "./app.html"
		}
	)],
	
	watch: false
};