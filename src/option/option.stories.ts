// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createOption, OptionArgs} from './fixtures/createOption.js';

export default {
	title: 'Library/Option',
	argTypes: {
		label: {control: 'text'},
		isDisabled: {control: 'boolean'},
		isSelected: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: OptionArgs) => {
	return createOption({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Option Label',
	isDisabled: false,
	isSelected: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-option>Option Label</vscode-option>`,
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
			code: `<vscode-option disabled>Option Label</vscode-option>`,
		},
	},
};

export const WithSelected: any = Template.bind({});
WithSelected.args = {
	...Default.args,
	isSelected: true,
};
WithSelected.parameters = {
	docs: {
		source: {
			code: `<vscode-option selected>Option Label</vscode-option>`,
		},
	},
};
