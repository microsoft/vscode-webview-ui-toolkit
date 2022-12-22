// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {BadgeArgs, createBadge} from './fixtures/createBadge.js';

export default {
	title: 'Library/Badge',
	argTypes: {
		label: {control: 'number'},
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
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-badge>1</vscode-badge>`,
		},
	},
};
