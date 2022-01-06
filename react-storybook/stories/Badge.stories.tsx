import React from 'react';

import {VSCodeBadge} from '../../src/react';

export default {
	title: 'Library/Badge',
	component: VSCodeBadge,
	argTypes: {
		label: {
			control: 'text',
		},
	},
};

const Template = args => {
	return <VSCodeBadge>{args.label}</VSCodeBadge>;
};

export const Default = Template.bind({});
Default.args = {
	label: '42',
};
