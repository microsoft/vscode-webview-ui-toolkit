import React from 'react';

import {VSCodeProgressRing} from '../../src/react';

export default {
	title: 'Library/Progress Ring',
	component: VSCodeProgressRing,
};

const Template = () => {
	return <VSCodeProgressRing />;
};

export const Default = Template.bind({});
Default.args = {};
