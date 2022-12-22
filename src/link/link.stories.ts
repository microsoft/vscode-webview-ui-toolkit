// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createLink, LinkArgs} from './fixtures/createLink.js';

export default {
	title: 'Library/Link',
	argTypes: {
		label: {control: 'text'},
		href: {control: 'text'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: LinkArgs) => {
	return createLink({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Link Text',
	href: '#',
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#">Link Text</vscode-link>`,
		},
	},
};
