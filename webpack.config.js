const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: './index.js',
	
	devtool: 'source-map',
	
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'src'),
		publicPath: '/'
	},

	devServer: {
		overlay: true,
		historyApiFallback: true
  	},
	
	resolve: {
		extensions: ['.js', '.jsx']
	},	
	
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
        		exclude: /node_modules/,
        		use: ['babel-loader']
			},
			{
				test:/\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	
	plugins: [new HtmlWebpackPlugin(
		{
			template: "./index.html"
		}
	)],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	
	watch: false
};