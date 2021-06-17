// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {action} from '@storybook/addon-actions';
import {ComboboxArgs, createCombobox} from './fixtures/createCombobox';

export default {
	title: 'Library/Combobox',
	argTypes: {
		placeholder: {control: 'text'},
		value: {control: 'text'},
		autocomplete: {
			control: {
				type: 'select',
				options: ['inline', 'list', 'both'],
			},
		},
		position: {
			control: {
				type: 'select',
				options: ['above', 'below'],
			},
		},
		isDisabled: {control: 'boolean'},
		isRequired: {control: 'boolean'},
		numberOfChildren: {control: 'number'},
		onChange: {
			action: 'changed',
			table: {
				disable: true,
			},
		},
	},
};

const Template = ({...args}: ComboboxArgs) => {
	return createCombobox({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	placeholder: '',
	position: 'below',
	isDisabled: false,
	numberOfChildren: 3,
	onChange: action('input-onchange'),
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox></vscode-combobox>`,
		},
	},
};

export const WithPlaceholder: any = Template.bind({});
WithPlaceholder.args = {
	...Default.args,
	placeholder: 'Enter an option',
};
WithPlaceholder.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox placeholder="Enter an option"></vscode-combobox>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	value: 'This is disabled',
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox disabled></vscode-combobox>`,
		},
	},
};

export const WithOpen: any = Template.bind({});
WithOpen.args = {
	...Default.args,
	isOpen: true,
};
WithOpen.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox open></vscode-combobox>`,
		},
	},
};

export const WithAutocomplete: any = Template.bind({});
WithAutocomplete.args = {
	...Default.args,
	autocomplete: 'inline',
};
WithAutocomplete.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox autocomplete="inline"></vscode-combobox>`,
		},
	},
};

export const WithPositionAbove: any = Template.bind({});
WithPositionAbove.args = {
	...Default.args,
	position: 'above',
};
WithPositionAbove.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox position="above"></vscode-combobox>`,
		},
	},
};

export const WithPositionBelow: any = Template.bind({});
WithPositionBelow.args = {
	...Default.args,
	position: 'below',
};
WithPositionBelow.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox position="below"></vscode-combobox>`,
		},
	},
};
