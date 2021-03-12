import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createSwitch, SwitchArgs} from './fixtures/createSwitch';
import {VSCodeSwitch} from './index';

// Prevent tree-shaking
VSCodeSwitch;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Switch',
	argTypes: {
		label: {control: 'text'},
		checkedMessage: {control: 'text'},
		unCheckedMessage: {control: 'text'},
		isChecked: {control: 'boolean'},
		isRequired: {control: 'boolean'},
		isReadOnly: {control: 'boolean'},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
	},
};

const Template = ({...args}: SwitchArgs) => {
	return createSwitch({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	label: 'Switch Label',
	checkedMessage: 'On',
	unCheckedMessage: 'Off',
	isChecked: false,
	isRequired: false,
	isReadOnly: false,
	isDisabled: false,
	isFocused: false,
};

export const NoLabel: any = Template.bind({});
NoLabel.args = {
	...Default.args,
	label: '',
};
