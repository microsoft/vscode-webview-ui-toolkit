import React from 'react';

import {VSCodeCheckbox} from '../../src/react';

export default {
	title: 'Library/Checkbox',
	component: VSCodeCheckbox,
	argTypes: {
		onChange: {action: 'change'},
		label: {
			defaultValue: 'Option Label',
			control: 'text',
		},
		disabled: {
			defaultValue: false,
			control: 'boolean',
		},
		checked: {
			defaultValue: false,
			control: 'boolean',
		},
		readOnly: {
			defaultValue: false,
			control: 'boolean',
		},
		value: {
			control: 'text',
		},
		indeterminate: {
			defaultValue: false,
			control: 'boolean',
		},
	},
};

const Template = args => {
	const {label, ...rest} = args;
	return (
		<>
			<VSCodeCheckbox {...rest}>{label}</VSCodeCheckbox>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {};

export const WithChecked = Template.bind({});
WithChecked.args = {
	checked: true,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	disabled: true,
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
	disabled: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
	value: 'baz',
};

export const WithIndeterminate = Template.bind({});
WithIndeterminate.args = {
	indeterminate: true,
};
