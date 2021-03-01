import {themes} from '@storybook/theming';
import {addDecorator} from '@storybook/html';

// Add global decorator that wraps all stories in the
// <vscode-design-system-provider> custom element
addDecorator(story => {
	const storyContents = story();
	return createDesignProviderWrapper(storyContents);
});

const createDesignProviderWrapper = story => {
	const designProvider = document.createElement(
		'vscode-design-system-provider'
	);
	designProvider.setAttribute('use-defaults', '');
	designProvider.appendChild(story);
	return designProvider;
};

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	options: {
		storySort: {
			order: ['Docs', 'Library'],
		},
		isToolshown: true,
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
