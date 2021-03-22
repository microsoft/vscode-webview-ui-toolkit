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
		isFocused: {control: 'boolean'},
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

export const Checked: any = Template.bind({});
Checked.args = {
	label: 'Label',
	isChecked: true,
	isDisabled: false,
	isFocused: false,
	onChange: action('checkbox-onchange'),
};
Checked.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox checked="true">Label</vscode-checkbox>`,
		},
	},
};

export const Unchecked: any = Template.bind({});
Unchecked.args = {
	...Checked.args,
	isChecked: false,
};
Unchecked.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox checked="false">Label</vscode-checkbox>`,
		},
	},
};

export const CheckedNoLabel: any = Template.bind({});
CheckedNoLabel.args = {
	isChecked: true,
	isDisabled: false,
	isFocused: false,
	onChange: action('checkbox-onchange'),
};
CheckedNoLabel.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox checked="true"></vscode-checkbox>`,
		},
	},
};

export const UncheckedNoLabel: any = Template.bind({});
UncheckedNoLabel.args = {
	...CheckedNoLabel.args,
	isChecked: false,
};
UncheckedNoLabel.parameters = {
	docs: {
		source: {
			code: `<vscode-checkbox checked="false"></vscode-checkbox>`,
		},
	},
};
