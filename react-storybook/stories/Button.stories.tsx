import React from 'react';

import {VSCodeButton} from '../../src/react';

// @ts-ignore
VSCodeButton.displayName = 'VSCodeButton';

export default {
	title: 'Library/Button',
	component: VSCodeButton,
	argTypes: {
		onClick: {action: 'button-clicked'},
		label: {
			control: 'text',
		},
		appearance: {
			control: 'select',
			options: ['primary', 'secondary', 'icon'],
		},
		disabled: {
			control: 'boolean',
		},
		autoFocus: {
			control: 'boolean',
		},
		startIcon: {
			control: 'boolean',
		},
		iconOnly: {
			control: 'boolean',
		},
	},
};

const Template = args => {
	const {
		label,
		appearance,
		disabled,
		autofocus,
		startIcon,
		iconOnly,
		...rest
	} = args;
	return (
		<VSCodeButton
			autoFocus={autofocus}
			disabled={disabled}
			appearance={iconOnly ? 'icon' : appearance}
			{...rest}
		>
			{startIcon && (
				<span className="codicon codicon-add" slot="start"></span>
			)}
			{iconOnly ? <span className="codicon codicon-check"></span> : label}
		</VSCodeButton>
	);
};

export const Default = Template.bind({});
Default.args = {
	label: 'Button Text',
	appearance: 'primary',
	isDisabled: false,
	isAutoFocused: false,
	startIcon: false,
	iconOnly: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
	...Default.args,
	appearance: 'secondary',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	...Default.args,
	disabled: true,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
	...Default.args,
	startIcon: true,
};

export const WithIconOnly = Template.bind({});
WithIconOnly.args = {
	...Default.args,
	iconOnly: true,
};
