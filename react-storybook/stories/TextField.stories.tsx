import React from 'react';

import {VSCodeTextField} from '../../src/react';

// @ts-ignore
VSCodeTextField.displayName = 'VSCodeTextField';

export default {
	title: 'Library/Text Field',
	component: VSCodeTextField,
	argTypes: {
		onChange: {action: 'change'},
		onInput: {action: 'input'},
		label: {
			defaultValue: 'Text Field Label',
			control: 'text',
		},
		placeholder: {
			control: 'text',
		},
		disabled: {
			defaultValue: false,
			control: 'boolean',
		},
		size: {
			control: 'number',
		},
		type: {
			defaultValue: 'text',
			control: {
				type: 'select',
				options: ['email', 'password', 'tel', 'text', 'url'],
			},
		},
		maxLength: {
			control: 'number',
		},
		readOnly: {
			defaultValue: false,
			control: 'boolean',
		},
		startIcon: {
			defaultValue: false,
			control: 'boolean',
		},
		endIcon: {
			defaultValue: false,
			control: 'boolean',
		},
	},
};

const Template = args => {
	const {label, startIcon, endIcon, ...rest} = args;
	return (
		<VSCodeTextField {...rest}>
			{label}
			{startIcon && (
				<span slot="start" className="codicon codicon-git-merge"></span>
			)}
			{endIcon && (
				<span
					slot="end"
					className="codicon codicon-chevron-right"
				></span>
			)}
		</VSCodeTextField>
	);
};

export const Default = Template.bind({});
Default.args = {};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
	placeholder: 'Placeholder goes here',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	disabled: true,
};

export const WithSize = Template.bind({});
WithSize.args = {
	size: 50,
};

export const WithType = Template.bind({});
WithType.args = {
	type: 'password',
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
	maxLength: 10,
	placeholder: '10 characters max',
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
	readOnly: true,
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
	startIcon: true,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
	endIcon: true,
};
