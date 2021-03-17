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
		minLength: {control: 'number'},
		maxLength: {control: 'number'},
		isRequired: {control: 'boolean'},
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isAutoFocused: {control: 'boolean'},
	},
};

const Template = ({...args}: TextFieldArgs) => {
	return createTextField({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Text Field Label',
	placeholder: 'Placeholder Text',
	isRequired: false,
	isReadOnly: false,
	isDisabled: false,
	isAutoFocused: false,
};

export const NoLabel: any = Template.bind({});
NoLabel.args = {
	...Default.args,
	label: '',
};
