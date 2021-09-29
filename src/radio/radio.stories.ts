// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {action} from '@storybook/addon-actions';
import {createRadio, RadioArgs} from './fixtures/createRadio';

export default {
	title: 'Library/Radio',
	argTypes: {
		label: {control: 'text'},
		isChecked: {control: 'boolean'},
		isReadonly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
		onChange: {
			action: 'changed',
			table: {
				disable: true,
			},
		},
	},
};

const Template = ({...args}: RadioArgs) => {
	return createRadio({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Radio Label',
	isChecked: false,
	isReadonly: false,
	isDisabled: false,
	isFocused: false,
	onChange: action('radio-onchange'),
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-radio>Radio Label</vscode-radio>`,
		},
	},
};

export const WithChecked: any = Template.bind({});
WithChecked.args = {
	...Default.args,
	isChecked: true,
};
WithChecked.parameters = {
	docs: {
		source: {
			code: `<vscode-radio checked>Radio Label</vscode-radio>`,
		},
	},
};

export const WithReadOnly: any = Template.bind({});
WithReadOnly.args = {
	...Default.args,
	isReadonly: true,
};
WithReadOnly.parameters = {
	docs: {
		source: {
			code: `<vscode-radio readonly>Radio Label</vscode-radio>`,
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
			code: `<vscode-radio disabled>Radio Label</vscode-radio>`,
		},
	},
};

export const WithFocus: any = Template.bind({});
WithFocus.args = {
	...Default.args,
	isFocused: true,
};
WithFocus.parameters = {
	docs: {
		source: {
			code: `<vscode-radio>Radio Label</vscode-radio>`,
		},
	},
};
