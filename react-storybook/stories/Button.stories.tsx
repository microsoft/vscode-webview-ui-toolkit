import React from 'react';
import {VSCodeButton} from '../../src/react';

export default {
	title: 'Library/Button',
	component: VSCodeButton,
	argTypes: {
		label: {
			control: 'text',
		},
		appearance: {
			defaultValue: 'primary',
			control: 'select',
			options: ['primary', 'secondary', 'icon'],
		},
		isDisabled: {
			defaultValue: false,
			control: 'boolean',
		},
		isAutoFocused: {
			defaultValue: false,
			control: 'boolean',
		},
	},
};

const Template = args => {
	const {label, appearance, isDisabled, isAutoFocused, ...rest} = args;
	return (
		<>
			<VSCodeButton
				autofocus={isAutoFocused}
				disabled={isDisabled}
				appearance={'secondary'}
				{...rest}
			>
				{label}
			</VSCodeButton>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Button Text',
	appearance: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Button Text',
	appearance: 'secondary',
};
