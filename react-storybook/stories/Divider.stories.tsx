import React from 'react';

import {VSCodeDivider} from '../../src/react';

// @ts-ignore
VSCodeDivider.displayName = 'VSCodeDivider';

export default {
	title: 'Library/Divider',
	component: VSCodeDivider,
	argTypes: {
		role: {
			control: 'select',
			options: ['presentation', 'separator'],
		},
	},
};

const Template = args => {
	return <VSCodeDivider {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	role: 'separator',
};

export const WithRole = Template.bind({});
WithRole.args = {
	role: 'presentation',
};
