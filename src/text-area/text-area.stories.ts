import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createTextArea, TextAreaArgs} from './fixtures/createTextArea';
import {VSCodeTextArea} from './index';

// Prevent tree-shaking
VSCodeTextArea;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Text Area',
	argTypes: {
		label: {control: 'text'},
		placeholder: {control: 'text'},
		value: {control: 'text'},
		resize: {
			control: {
				type: 'select',
				options: ['None', 'Both', 'Horizontal', 'Vertical'],
			},
		},
		minLength: {control: 'number'},
		maxLength: {control: 'number'},
		isRequired: {control: 'boolean'},
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: TextAreaArgs) => {
	return createTextArea({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Text Area Label',
	placeholder: 'Placeholder Text',
	resize: 'None',
	isRequired: false,
	isReadOnly: false,
	isDisabled: false,
	isAutoFocused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area placeholder="Placeholder Text">Text Area Label</vscode-text-area>`,
		},
	},
};

export const NoLabel: any = Template.bind({});
NoLabel.args = {
	...Default.args,
	label: '',
};
NoLabel.parameters = {
	docs: {
		source: {
			code: `<vscode-text-area placeholder="Placeholder Text"></vscode-text-area>`,
		},
	},
};
