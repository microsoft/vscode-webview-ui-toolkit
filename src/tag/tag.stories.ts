// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createTag, TagArgs} from './fixtures/createTag';

export default {
	title: 'Library/Tag',
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

const Template = ({...args}: TagArgs) => {
	return createTag({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Tag Text',
	appearance: 'Primary',
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-tag>Tag Text</vscode-tag>`,
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
			code: `<vscode-tag appearance="secondary">Tag Text</vscode-tag>`,
		},
	},
};
