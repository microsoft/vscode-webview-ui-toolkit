import React from 'react';

import {VSCodeButton} from '../../src/react';

export default {
	title: 'Library/Button',
	component: VSCodeButton,
	argTypes: {
		onClick: {action: 'clicked'},
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
		startIcon: {
			defaultValue: false,
			control: 'boolean',
		},
		iconOnly: {
			defaultValue: false,
			control: 'boolean',
		},
	},
};

const Template = args => {
	const {
		label,
		appearance,
		isDisabled,
		isAutoFocused,
		startIcon,
		iconOnly,
		...rest
	} = args;
	return (
		<>
			<VSCodeButton
				autofocus={isAutoFocused}
				disabled={isDisabled}
				appearance={iconOnly ? 'icon' : appearance}
				{...rest}
			>
				{startIcon && (
					<span className="codicon codicon-add" slot="start"></span>
				)}
				{iconOnly ? (
					<span className="codicon codicon-check"></span>
				) : (
					label
				)}
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

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	label: 'Button Text',
	appearance: 'primary',
	isDisabled: true,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
	label: 'Button Text',
	appearance: 'primary',
	startIcon: true,
};

export const WithIconOnly = Template.bind({});
WithIconOnly.args = {
	label: 'Button Text',
	appearance: 'primary',
	iconOnly: true,
};
