import React from 'react';

import {VSCodeRadio, VSCodeRadioGroup} from '../../src/react';

// @ts-ignore
VSCodeRadio.displayName = 'VSCodeRadio';
// @ts-ignore
VSCodeRadioGroup.displayName = 'VSCodeRadioGroup';

export default {
	title: 'Library/Radio Group',
	component: VSCodeRadioGroup,
	argTypes: {
		onChange: {action: 'change'},
		label: {defaultValue: 'Radio Group', control: 'text'},
		orientation: {
			defaultValue: 'horizontal',
			control: {
				type: 'select',
				options: ['vertical', 'horizontal'],
			},
		},
		numberOfChildren: {defaultValue: 3, control: 'number'},
		disabled: {control: 'boolean'},
		readOnly: {control: 'boolean'},
	},
};

const Template = args => {
	const {label, numberOfChildren, ...rest} = args;

	const options = Array.from({length: numberOfChildren}, (_, i) => i);

	return (
		<VSCodeRadioGroup {...rest}>
			<label slot="label">{label}</label>
			{options.map((_, index) => (
				<VSCodeRadio value={`Option #${index + 1}`}>
					{`Option #${index + 1}`}
				</VSCodeRadio>
			))}
		</VSCodeRadioGroup>
	);
};

export const Default = Template.bind({});
Default.args = {};

export const WithVerticalOrientation = Template.bind({});
WithVerticalOrientation.args = {
	orientation: 'vertical',
};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	disabled: true,
};

export const WithReadOnly = Template.bind({});
WithReadOnly.args = {
	readOnly: true,
};
