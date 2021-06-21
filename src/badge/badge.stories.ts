// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {BadgeArgs, createBadge} from './fixtures/createBadge';

export default {
	title: 'Library/Badge',
	argTypes: {
		label: {control: 'text'},
		appearance: {
			control: {
				type: 'select',
				options: ['Primary', 'Secondary'],
			},
		},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: BadgeArgs) => {
	return createBadge({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: '1',
	appearance: 'Primary',
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-badge>1</vscode-badge>`,
		},
	},
};

export const Secondary: any = Template.bind({});
Secondary.args = {
	...Default.args,
	appearance: 'Secondary',
};
Secondary.parameters = {
	docs: {
		source: {
			code: `<vscode-badge appearance="secondary">1</vscode-badge>`,
		},
	},
};
