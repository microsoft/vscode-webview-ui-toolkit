import React from 'react';

import {VSCodeDivider} from '../../src/react';

export default {
	title: 'Library/Divider',
	component: VSCodeDivider,
	argTypes: {
		role: {
			defaultValue: 'separator',
			control: 'select',
			options: ['presentation', 'separator'],
		},
	},
};

const Template = args => {
	return <VSCodeDivider {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const WithRole = Template.bind({});
WithRole.args = {
	role: 'presentation',
};
