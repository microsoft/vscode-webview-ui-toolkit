import React from 'react';

import {VSCodeProgressRing} from '../../src/react';

// @ts-ignore
VSCodeProgressRing.displayName = 'VSCodeProgressRing';

export default {
	title: 'Library/Progress Ring',
	component: VSCodeProgressRing,
};

const Template = () => {
	return <VSCodeProgressRing />;
};

export const Default = Template.bind({});
Default.args = {};
