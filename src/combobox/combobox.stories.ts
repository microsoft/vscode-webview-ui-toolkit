import {action} from '@storybook/addon-actions';
import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {ComboboxArgs, createCombobox} from './fixtures/createCombobox';
import {VSCodeCombobox} from './index';

// Prevent tree-shaking
VSCodeCombobox;
VSCodeDesignSystemProvider;

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
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isRequired: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
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
	isReadOnly: false,
	isDisabled: false,
	isRequired: false,
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

export const WithReadonly: any = Template.bind({});
WithReadonly.args = {
	...Default.args,
	placeholder: 'This text is read only',
	isReadOnly: true,
};
WithReadonly.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox readonly></vscode-combobox>`,
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
			code: `<vscode-combobox disabled></vscode-combobox>`,
		},
	},
};

export const WithRequired: any = Template.bind({});
WithRequired.args = {
	...Default.args,
	isRequired: true,
};
WithRequired.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox required></vscode-combobox>`,
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

export const WithAutofocus: any = Template.bind({});
WithAutofocus.args = {
	...Default.args,
	isAutoFocused: 'true',
};
WithAutofocus.parameters = {
	docs: {
		source: {
			code: `<vscode-combobox autofocus></vscode-combobox>`,
		},
	},
};
