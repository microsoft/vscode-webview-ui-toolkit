module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
		'../docs/**/*.stories.mdx',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
	],
	features: {
		postcss: false,
	},
	refs: (config, {configType}) => {
		if (configType === 'DEVELOPMENT') {
			return {
				react: {
					title: 'React',
					url: 'http://localhost:7007',
				},
			};
		}
	},
};
