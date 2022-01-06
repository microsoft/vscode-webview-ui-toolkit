import React from 'react';
import {VSCodeButton} from '../../src/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: VSCodeButton,
	argTypes: {
		// backgroundColor: {control: 'color'},
	},
};

const Template = args => <VSCodeButton {...args}>Button Text</VSCodeButton>;

export const Default = Template.bind({});

Default.args = {};
