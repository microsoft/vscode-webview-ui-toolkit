import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createTextField, TextFieldArgs} from './fixtures/createTextField';
import {VSCodeTextField} from './index';

// Prevent tree-shaking
VSCodeTextField;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Text Field',
	argTypes: {
		label: {control: 'text'},
		placeholder: {control: 'text'},
		value: {control: 'text'},
		pattern: {control: 'text'},
		minLength: {control: 'number'},
		maxLength: {control: 'number'},
		size: {control: 'number'},
		isRequired: {control: 'boolean'},
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
		startIcon: {control: 'boolean'},
		endIcon: {control: 'boolean'},
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
	label: '',
	placeholder: '',
	isRequired: false,
	isReadOnly: false,
	isDisabled: false,
	isAutoFocused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field></vscode-text-field>`,
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
			code: `<vscode-text-field placeholder="Placeholder Text"></vscode-text-field>`,
		},
	},
};

export const WithLabel: any = Template.bind({});
WithLabel.args = {
	...Default.args,
	label: 'Text Field Label',
};
WithLabel.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field>Text Field Label</vscode-text-field>`,
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
			code: `<vscode-text-field autofocus></vscode-text-field>`,
		},
	},
};

export const WithDisabled: any = Template.bind({});
WithDisabled.args = {
	...Default.args,
	placeholder: 'This text field cannot be interacted with',
	isDisabled: true,
	size: 35,
};
WithDisabled.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field disabled></vscode-text-field>`,
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
			code: `<vscode-text-field size="50"></vscode-text-field>`,
		},
	},
};

export const WithMinLength: any = Template.bind({});
WithMinLength.args = {
	...Default.args,
	placeholder: 'This text field requires a minimum of 10 characters',
	minLength: 10,
	size: 50,
};
WithMinLength.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field minlength="10"></vscode-text-field>`,
		},
	},
};

export const WithMaxLength: any = Template.bind({});
WithMaxLength.args = {
	...Default.args,
	placeholder: 'This text field can only contain a maximum of 10 characters',
	maxLength: 10,
	size: 50,
};
WithMaxLength.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field maxlength="10"></vscode-text-field>`,
		},
	},
};

export const WithPattern: any = Template.bind({});
WithPattern.args = {
	...Default.args,
	placeholder:
		'The pattern requires a lowercase string that is 4-8 characters in length',
	pattern: '[a-z]{4,8}',
	size: 60,
};
WithPattern.parameters = {
	docs: {
		source: {
			code: `<vscode-text-field pattern="[a-z]{4,8}"></vscode-text-field>`,
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
			code: `<vscode-text-field readonly></vscode-text-field>`,
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
			code: `<!-- Note: Using VSCode Codicon Library -->\n\n<vscode-text-field>\n\t<span slot="start" class="codicon codicon-search"></span>\n</vscode-text-field>`,
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
			code: `<!-- Note: Using VSCode Codicon Library -->\n\n<vscode-text-field>\n\t<span slot="end" class="codicon codicon-text-size"></span>\n</vscode-text-field>`,
		},
	},
};
