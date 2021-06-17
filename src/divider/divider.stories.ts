// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createDivider, DividerArgs} from './fixtures/createDivider';

export default {
	title: 'Library/Divider',
	argTypes: {
		role: {
			control: {
				type: 'select',
				options: ['Separator', 'Presentation'],
			},
		},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: DividerArgs) => {
	return createDivider({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	role: 'Separator',
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-divider></vscode-divider>`,
		},
	},
};

export const WithRole: any = Template.bind({});
WithRole.args = {
	role: 'Presentation',
};
WithRole.parameters = {
	docs: {
		source: {
			code: `<vscode-divider role="presentation"></vscode-divider>`,
		},
	},
};
