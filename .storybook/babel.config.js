module.exports = {
	presets: ['@babel/preset-env'],
	plugins: [
		['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
		['@babel/plugin-proposal-class-properties', {loose: true}],
	],
};
