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
			code: `<vscode-combobox>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-combobox>`,
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
			code: `<vscode-combobox placeholder="Enter an option">\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-combobox>`,
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
			code: `<vscode-combobox disabled>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-combobox>`,
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
			code: `<vscode-combobox open>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-combobox>`,
		},
	},
};

export const WithPositionAbove: any = Template.bind({});
WithPositionAbove.decorators = [
	story => {
		const decorator = document.createElement('div');
		decorator.style.marginTop = '5rem';
		decorator.appendChild(story());
		return decorator;
	},
];
WithPositionAbove.args = {
	...Default.args,
	isOpen: true,
	position: 'above',
};
WithPositionAbove.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox position="above">\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-combobox>`,
		},
	},
};

export const WithAutocomplete: any = Template.bind({});
WithAutocomplete.args = {
	...Default.args,
	autocomplete: 'inline',
	placeholder: 'Enter an option',
};
WithAutocomplete.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox autocomplete="inline">\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n</vscode-combobox>`,
		},
	},
};

export const WithNoOptions: any = Template.bind({});
WithNoOptions.args = {
	...Default.args,
	isOpen: true,
	numberOfChildren: 0,
};
WithNoOptions.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox></vscode-combobox>`,
		},
	},
};

export const WithLongList: any = Template.bind({});
WithLongList.args = {
	...Default.args,
	isOpen: true,
	numberOfChildren: 50,
};
WithLongList.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox>\n\t<vscode-option>Option Label #1</vscode-option>\n\t<vscode-option>Option Label #2</vscode-option>\n\t<vscode-option>Option Label #3</vscode-option>\n\t<!-- Insert more options... -->\n</vscode-combobox>`,
		},
	},
};
