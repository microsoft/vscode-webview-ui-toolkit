import {themes} from '@storybook/theming';

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	options: {
		storySort: {
			order: ['Docs', 'Library'],
		},
		isToolshown: true,
		enableShortcuts: false,
	},
	docs: {
		theme: themes.light,
	},
	backgrounds: {
		default: 'dark',
		values: [
			{
				name: 'light',
				value: '#f9f9f9',
			},
			{
				name: 'grey',
				value: '#929396',
			},
			{
				name: 'dark',
				value: '#252526',
			},
		],
	},
};
