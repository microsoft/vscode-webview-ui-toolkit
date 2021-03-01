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

export const PrimaryDisabled: any = Template.bind({});
PrimaryDisabled.args = {
	...Primary.args,
	isDisabled: true,
};

export const PrimaryFocused: any = Template.bind({});
PrimaryFocused.args = {
	...Primary.args,
	isFocused: true,
};

export const Secondary: any = Template.bind({});
Secondary.args = {
	...Primary.args,
	appearance: 'Secondary',
};

export const SecondaryDisabled: any = Template.bind({});
SecondaryDisabled.args = {
	...Secondary.args,
	isDisabled: true,
};

export const SecondaryFocused: any = Template.bind({});
SecondaryFocused.args = {
	...Secondary.args,
	isFocused: true,
};

export const Install: any = Template.bind({});
Install.args = {
	...Primary.args,
	appearance: 'Install',
};

export const InstallDisabled: any = Template.bind({});
InstallDisabled.args = {
	...Install.args,
	isDisabled: true,
};

export const InstallFocused: any = Template.bind({});
InstallFocused.args = {
	...Install.args,
	isFocused: true,
};

export const Text: any = Template.bind({});
Text.args = {
	...Primary.args,
	appearance: 'Text',
};

export const TextDisabled: any = Template.bind({});
TextDisabled.args = {
	...Text.args,
	isDisabled: true,
};

export const TextFocused: any = Template.bind({});
TextFocused.args = {
	...Text.args,
	isFocused: true,
};

export const Link: any = Template.bind({});
Link.args = {
	...Primary.args,
	appearance: 'Link',
};

export const LinkDisabled: any = Template.bind({});
LinkDisabled.args = {
	...Link.args,
	isDisabled: true,
};

export const LinkFocused: any = Template.bind({});
LinkFocused.args = {
	...Link.args,
	isFocused: true,
};
