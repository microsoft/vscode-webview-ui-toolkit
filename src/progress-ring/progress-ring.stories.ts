// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createProgressRing} from './fixtures/createProgressRing';

export default {
	title: 'Library/Progress Ring',
	parameters: {
		actions: {
			disabled: true,
		},
		controls: {
			disabled: true,
		},
	},
};

const Template = () => {
	return createProgressRing();
};

export const Default: any = Template.bind({});
Default.args = {};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-progress-ring></vscode-progress-ring>`,
		},
	},
};
