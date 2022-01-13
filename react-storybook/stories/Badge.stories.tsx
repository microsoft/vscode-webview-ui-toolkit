import React from 'react';

import {VSCodeBadge} from '../../src/react';

// @ts-ignore
VSCodeBadge.displayName = 'VSCodeBadge';

export default {
	title: 'Library/Badge',
	component: VSCodeBadge,
	argTypes: {
		label: {
			control: 'text',
		},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = args => {
	return <VSCodeBadge>{args.label}</VSCodeBadge>;
};

export const Default = Template.bind({});
Default.args = {
	label: '1',
};
