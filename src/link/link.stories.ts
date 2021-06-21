// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createLink, LinkArgs} from './fixtures/createLink';

export default {
	title: 'Library/Link',
	argTypes: {
		label: {control: 'text'},
		href: {control: 'text'},
		isDisabled: {control: 'boolean'},
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
	isDisabled: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#">Link Text</vscode-link>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-link href="#" disabled>Link Text</vscode-link>`,
		},
	},
};
