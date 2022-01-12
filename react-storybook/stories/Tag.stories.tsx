import React from 'react';

import {VSCodeTag} from '../../src/react';

// @ts-ignore
VSCodeTag.displayName = 'VSCodeTag';

export default {
	title: 'Library/Tag',
	component: VSCodeTag,
	argTypes: {
		label: {
			defaultValue: 'Tag Text',
			control: 'text',
		},
	},
};

const Template = args => {
	const {label, ...rest} = args;
	return <VSCodeTag {...rest}>{label}</VSCodeTag>;
};

export const Default = Template.bind({});
Default.args = {};
