import React from 'react';

import {VSCodeOption} from '../../src/react';

export default {
	title: 'Library/Option',
	component: VSCodeOption,
	argTypes: {
		label: {
			defaultValue: 'Option Label',
			control: 'text',
		},
		disabled: {
			defaultValue: false,
			control: 'boolean',
		},
		selected: {
			defaultValue: false,
			control: 'boolean',
		},
	},
};

const Template = args => {
	const {label, ...rest} = args;
	return (
		<>
			<VSCodeOption {...rest}>{label}</VSCodeOption>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	disabled: true,
};

export const WithSelected = Template.bind({});
WithSelected.args = {
	selected: true,
};
