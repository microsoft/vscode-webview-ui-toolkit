const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = function (env, {mode}) {
	const production = mode === 'production';
	return {
		mode: production ? 'production' : 'development',
		devtool: production ? false : 'inline-source-map',
		entry: {
			app: ['./src/index.ts'],
		},
		output: {
			filename: 'index.js',
		},
		resolve: {
			extensions: ['.ts', '.js'],
			modules: ['src', 'node_modules'],
		},
		devServer: {
			port: 9002,
			historyApiFallback: true,
			writeToDisk: true,
			open: !process.env.CI,
			lazy: false,
		},
		plugins: [new CleanWebpackPlugin()],
		module: {
			rules: [
				{
					test: /\.ts$/i,
					loader: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
	};
};
