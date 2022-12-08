// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createTextField, TextFieldArgs} from './fixtures/createTextField';

export default {
	title: 'Library/Text Field',
	argTypes: {
		label: {control: 'text'},
		placeholder: {control: 'text'},
		value: {control: 'text'},
		maxLength: {control: 'number'},
		size: {control: 'number'},
		type: {
			control: {
				type: 'select',
				options: ['Email', 'Password', 'Tel', 'Text', 'Url'],
			},
		},
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
		startIcon: {control: 'boolean'},
		endIcon: {control: 'boolean'},
		multipleIcons: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: TextFieldArgs) => {
	return createTextField({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Text Field Label',
	placeholder: '',
	value: '',
	maxLength: '',
	size: '',
	type: 'Text',
	isReadOnly: false,
	isDisabled: false,
	isAutoFocused: false,
	startIcon: false,
	endIcon: false,
	multipleIcons: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field>Text Field Label</vscode-text-field>`,
		},
	},
};

export const WithPlaceholder: any = Template.bind({});
WithPlaceholder.args = {
	...Default.args,
	placeholder: 'Placeholder Text',
};
WithPlaceholder.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field placeholder="Placeholder Text">Text Field Label</vscode-text-field>`,
		},
	},
};

export const WithAutofocus: any = Template.bind({});
WithAutofocus.args = {
	...Default.args,
	isAutoFocused: true,
};
WithAutofocus.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field autofocus>Text Field Label</vscode-text-field>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	placeholder: 'This text field cannot be interacted with',
	isDisabled: true,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field disabled>Text Field Label</vscode-text-field>`,
		},
	},
};

export const WithCustomSize: any = Template.bind({});
WithCustomSize.args = {
	...Default.args,
	placeholder: 'This text field is 50 characters in width',
	size: 50,
};
WithCustomSize.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field size="50">Text Field Label</vscode-text-field>`,
		},
	},
};

export const WithType: any = Template.bind({});
WithType.args = {
	...Default.args,
	type: 'Text',
};
WithType.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field type="email">Text Field Label</vscode-text-field>\n<vscode-text-field type="password">Text Field Label</vscode-text-field>\n<vscode-text-field type="tel">Text Field Label</vscode-text-field>\n<vscode-text-field type="text">Text Field Label</vscode-text-field>\n<vscode-text-field type="url">Text Field Label</vscode-text-field>`,
		},
	},
};

export const WithMaxLength: any = Template.bind({});
WithMaxLength.args = {
	...Default.args,
	placeholder: 'This text field can only contain a maximum of 10 characters',
	maxLength: 10,
	size: 52,
};
WithMaxLength.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field maxlength="10">Text Field Label</vscode-text-field>`,
		},
	},
};

export const WithReadonly: any = Template.bind({});
WithReadonly.args = {
	...Default.args,
	placeholder: 'This text is read only',
	isReadOnly: true,
};
WithReadonly.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field readonly>Text Field Label</vscode-text-field>`,
		},
	},
};

export const WithStartIcon: any = Template.bind({});
WithStartIcon.args = {
	...Default.args,
	startIcon: true,
};
WithStartIcon.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using Visual Studio Code Codicon Library -->\n\n<vscode-text-field>\n\tText Field Label\n\t<span slot="start" class="codicon codicon-search"></span>\n</vscode-text-field>`,
		},
	},
};

export const WithEndIcon: any = Template.bind({});
WithEndIcon.args = {
	...Default.args,
	endIcon: true,
};
WithEndIcon.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using Visual Studio Code Codicon Library -->\n\n<vscode-text-field>\n\tText Field Label\n\t<span slot="end" class="codicon codicon-text-size"></span>\n</vscode-text-field>`,
		},
	},
};

export const WithMultipleIcons: any = Template.bind({});
WithMultipleIcons.args = {
	...Default.args,
	multipleIcons: true,
};
WithMultipleIcons.parameters = {
	docs: {
		source: {
			code: `<!-- Note: Using Visual Studio Code Codicon Library -->\n\n<vscode-text-field>\n\tText Field Label\n\t<section slot="end" style="display:flex; align-items: center;">\n\t\t<vscode-button appearance="icon" aria-label="Match Case">\n\t\t\t<span class="codicon codicon-case-sensitive"></span>\n\t\t</vscode-button>\n\t\t<vscode-button appearance="icon" aria-label="Match Whole Word">\n\t\t\t<span class="codicon codicon-whole-word"></span>\n\t\t</vscode-button>\n\t\t<vscode-button appearance="icon" aria-label="Use Regular Expression">\n\t\t\t<span class="codicon codicon-regex"></span>\n\t\t</vscode-button>\n\t</section>\n</vscode-text-field>`,
		},
	},
};
