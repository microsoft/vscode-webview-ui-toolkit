import * as VSCodeComponents from '../src/index-rollup';
import {themes} from '@storybook/theming';

VSCodeComponents;

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
				name: 'dark',
				value: '#1e1e1e',
			},
		],
	},
};
