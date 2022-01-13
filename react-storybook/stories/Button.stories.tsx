import React from 'react';

import {VSCodeButton} from '../../src/react';

// @ts-ignore
VSCodeButton.displayName = 'VSCodeButton';

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
		disabled: {
			defaultValue: false,
			control: 'boolean',
		},
		autoFocus: {
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
	disabled: true,
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
