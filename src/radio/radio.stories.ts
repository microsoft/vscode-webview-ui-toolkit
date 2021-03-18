import {action} from '@storybook/addon-actions';
import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createRadio, RadioArgs} from './fixtures/createRadio';
import {VSCodeRadio} from './index';

// Prevent tree-shaking
VSCodeRadio;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Radio',
	argTypes: {
		label: {control: 'text'},
		isChecked: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
		onChange: {action: 'changed'},
	},
};

const Template = ({...args}: RadioArgs) => {
	return createRadio({...args});
};

export const Checked: any = Template.bind({});
Checked.args = {
	label: 'Radio Label',
	isChecked: true,
	isDisabled: false,
	isFocused: false,
	onChange: action('radio-onchange'),
};
Checked.parameters = {
	docs: {
		source: {
			code: `<vscode-radio checked="true">Radio Label</vscode-radio>`,
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
			code: `<vscode-radio checked="false">Radio Label</vscode-radio>`,
		},
	},
};

export const CheckedNoLabel: any = Template.bind({});
CheckedNoLabel.args = {
	isChecked: true,
	isDisabled: false,
	isFocused: false,
	onChange: action('radio-onchange'),
};
CheckedNoLabel.parameters = {
	docs: {
		source: {
			code: `<vscode-radio checked="true"></vscode-radio>`,
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
			code: `<vscode-radio checked="false"></vscode-radio>`,
		},
	},
};
