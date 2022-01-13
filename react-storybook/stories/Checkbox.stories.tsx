import React from 'react';

import {VSCodeCheckbox} from '../../src/react';

// @ts-ignore
VSCodeCheckbox.displayName = 'VSCodeButton';

export default {
	title: 'Library/Checkbox',
	component: VSCodeCheckbox,
	argTypes: {
		onChange: {
			action: 'change',
		},
		label: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
		},
		checked: {
			control: 'boolean',
		},
		readOnly: {
			control: 'boolean',
		},
		value: {
			control: 'text',
		},
		indeterminate: {
			control: 'boolean',
		},
	},
};

const Template = args => {
	const {label, ...rest} = args;
	return <VSCodeCheckbox {...rest}>{label}</VSCodeCheckbox>;
};

export const Default = Template.bind({});
Default.args = {
	label: 'Label',
	checked: false,
	indeterminate: false,
	disabled: false,
	readOnly: false,
};

export const WithChecked = Template.bind({});
WithChecked.args = {
	...Default.args,
	checked: true,
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	...Default.args,
	disabled: true,
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
	...Default.args,
	readOnly: true,
};

export const WithValue = Template.bind({});
WithValue.args = {
	...Default.args,
	value: 'baz',
};

export const WithIndeterminate = Template.bind({});
WithIndeterminate.args = {
	...Default.args,
	indeterminate: true,
};
