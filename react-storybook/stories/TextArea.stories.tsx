import React from 'react';

import {VSCodeTextArea} from '../../src/react';

export default {
	title: 'Library/Text Area',
	component: VSCodeTextArea,
	argTypes: {
		onChange: {action: 'change'},
		onInput: {action: 'input'},
		label: {
			defaultValue: 'Text Area Label',
			control: 'text',
		},
		placeholder: {
			control: 'text',
		},
		value: {
			control: 'text',
		},
		disabled: {
			defaultValue: false,
			control: 'boolean',
		},
		rows: {
			control: 'number',
		},
		cols: {
			control: 'number',
		},
		maxLength: {
			control: 'number',
		},
		resize: {
			control: {
				type: 'select',
				options: ['none', 'both', 'horizontal', 'vertical'],
			},
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
	const {label, ...rest} = args;
	return <VSCodeTextArea {...rest}>{label}</VSCodeTextArea>;
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

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
	maxLength: 10,
	placeholder: '10 characters max',
};

export const WithCustomRows = Template.bind({});
WithCustomRows.args = {
	rows: 10,
	placeholder: '10 rows',
};

export const WithCustomCols = Template.bind({});
WithCustomCols.args = {
	cols: 10,
	placeholder: '10 cols',
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
	readOnly: true,
};

export const WithResizeNone = Template.bind({});
WithResizeNone.args = {
	resize: 'none',
};

export const WithResizeHorizontal = Template.bind({});
WithResizeHorizontal.args = {
	resize: 'horizontal',
};

export const WithResizeVertical = Template.bind({});
WithResizeVertical.args = {
	resize: 'vertical',
};

export const WithResizeBoth = Template.bind({});
WithResizeBoth.args = {
	resize: 'both',
};
