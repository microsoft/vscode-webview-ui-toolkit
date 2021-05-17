import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createNumberField, NumberFieldArgs} from './fixtures/createNumberField';
import {VSCodeNumberField} from './index';

// Prevent tree-shaking
VSCodeNumberField;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Number Field',
	argTypes: {
		label: {control: 'text'},
		placeholder: {control: 'text'},
		value: {control: 'text'},
		size: {control: 'number'},
		isRequired: {control: 'boolean'},
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
		startIcon: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: NumberFieldArgs) => {
	return createNumberField({...args});
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
			code: `<vscode-number-field></vscode-number-field>`,
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
			code: `<vscode-number-field placeholder="Placeholder Text"></vscode-number-field>`,
		},
	},
};

export const WithLabel: any = Template.bind({});
WithLabel.args = {
	...Default.args,
	label: 'Number Field Label',
};
WithLabel.parameters = {
	docs: {
		source: {
			code: `<vscode-number-field>Text Field Label</vscode-number-field>`,
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
			code: `<vscode-number-field autofocus></vscode-number-field>`,
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
			code: `<vscode-number-field disabled></vscode-number-field>`,
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
			code: `<vscode-number-field size="50"></vscode-number-field>`,
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
			code: `<vscode-number-field readonly></vscode-number-field>`,
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
			code: `<!-- Note: Using VS Code Codicon Library -->\n\n<vscode-number-field>\n\t<span slot="start" class="codicon codicon-search"></span>\n</vscode-number-field>`,
		},
	},
};
