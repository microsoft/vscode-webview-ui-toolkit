import {action} from '@storybook/addon-actions';
import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {CheckboxArgs, createCheckbox} from './fixtures/createCheckbox';
import {VSCodeCheckbox} from './index';

// Prevent tree-shaking
VSCodeCheckbox;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Checkbox',
	argTypes: {
		label: {control: 'text'},
		isChecked: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
		isReadOnly: {control: 'boolean'},
		isRequired: {control: 'boolean'},
		hasValue: {control: 'boolean'},
		isPartOfForm: {control: 'boolean'},
		indicatorIcon: {control: 'boolean'},
		onChange: {
			action: 'changed',
			table: {
				disable: true,
			},
		},
	},
};

const Template = ({...args}: CheckboxArgs) => {
	return createCheckbox({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Label',
	isChecked: false,
	isDisabled: false,
	isAutoFocused: false,
	isReadOnly: false,
	hasValue: false,
	isPartOfForm: false,
	indicatorIcon: false,
	onChange: action('checkbox-onchange'),
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox>Label</vscode-checkbox>`,
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
			code: `<vscode-checkbox checked>Label</vscode-checkbox>`,
		},
	},
};

export const WithAutoFocus: any = Template.bind({});
WithAutoFocus.args = {
	...Default.args,
	isAutoFocused: true,
};
WithAutoFocus.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox autofocus>Label</vscode-checkbox>`,
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
			code: `<vscode-checkbox disabled>Label</vscode-checkbox>`,
		},
	},
};

export const WithReadOnly: any = Template.bind({});
WithReadOnly.args = {
	...Default.args,
	isReadOnly: true,
};
WithReadOnly.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox readonly>Label</vscode-checkbox>`,
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
			code: `<vscode-checkbox required>Label</vscode-checkbox>`,
		},
	},
};

export const WithValue: any = Template.bind({});
WithValue.args = {
	...Default.args,
	hasValue: true,
};
WithValue.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox value="foo">Label</vscode-checkbox>`,
		},
	},
};
