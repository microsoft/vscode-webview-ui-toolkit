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
		appearance: {
			control: {
				type: 'select',
				options: ['Primary', 'Secondary', 'Install', 'Text', 'Link'],
			},
		},
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
		onClick: {action: 'clicked'},
	},
};

const Template = ({...args}: ButtonArgs) => {
	return createButton({...args});
};

export const Primary: any = Template.bind({});
Primary.args = {
	label: 'Button',
	appearance: 'Primary',
	isDisabled: false,
	isFocused: false,
	onClick: action('button-clicked'),
};

export const Secondary: any = Template.bind({});
Secondary.args = {
	...Primary.args,
	appearance: 'Secondary',
};

export const Install: any = Template.bind({});
Install.args = {
	...Primary.args,
	appearance: 'Install',
};

export const Text: any = Template.bind({});
Text.args = {
	...Primary.args,
	appearance: 'Text',
};

export const Link: any = Template.bind({});
Link.args = {
	...Primary.args,
	appearance: 'Link',
};
