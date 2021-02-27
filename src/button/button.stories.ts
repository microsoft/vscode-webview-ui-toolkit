import {action} from '@storybook/addon-actions';
import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {ButtonArgs, createButton} from './fixtures/createButton';
import {VSCodeButton} from './index';

// Prevent tree-shaking
VSCodeButton;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Button',
	argTypes: {
		label: {control: 'text'},
		onClick: {action: 'onClick'},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
	},
};

const Template = ({...args}: ButtonArgs) => {
	return createButton({...args});
};

export const Primary: any = Template.bind({});
Primary.args = {
	label: 'Button',
	onClick: action('button-clicked'),
	isDisabled: false,
	isFocused: false,
};

export const Disabled: any = Template.bind({});
Disabled.args = {
	...Primary.args,
	isDisabled: true,
};

export const Focused: any = Template.bind({});
Focused.args = {
	...Primary.args,
	isFocused: true,
};
