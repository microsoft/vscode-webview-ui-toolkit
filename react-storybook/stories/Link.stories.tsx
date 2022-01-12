import React from 'react';

import {VSCodeLink} from '../../src/react';

export default {
	title: 'Library/Link',
	component: VSCodeLink,
	argTypes: {
		label: {
			defaultValue: 'vscode-webview-ui-toolkit',
			control: 'text',
		},
		href: {
			control: 'text',
			defaultValue:
				'https://github.com/microsoft/vscode-webview-ui-toolkit',
		},
	},
};

const Template = args => {
	const {label, ...rest} = args;
	return <VSCodeLink {...rest}>{label}</VSCodeLink>;
};

export const Default = Template.bind({});
Default.args = {};
