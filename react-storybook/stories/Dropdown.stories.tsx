import React from 'react';

import {VSCodeDropdown, VSCodeOption} from '../../src/react';

// @ts-ignore
VSCodeDropdown.displayName = 'VSCodeDropdown';
// @ts-ignore
VSCodeOption.displayName = 'VSCodeOption';

export default {
	title: 'Library/Dropdown',
	component: VSCodeDropdown,
	argTypes: {
		open: {control: 'boolean'},
		value: {
			control: 'text',
		},
		position: {
			control: {
				type: 'select',
				options: ['above', 'below'],
			},
		},
		disabled: {control: 'boolean'},
		customIndicator: {control: 'boolean'},
		numberOfChildren: {defaultValue: 3, control: 'number'},
		onChange: {
			action: 'change',
			table: {
				disable: true,
			},
		},
	},
};

const Template = args => {
	const {numberOfChildren, customIndicator, ...rest} = args;

	const options = Array.from({length: numberOfChildren}, (_, i) => i);

	return (
		<div
			style={{
				marginTop: args.position === 'above' ? '100px' : '0',
			}}
		>
			<VSCodeDropdown {...rest}>
				{customIndicator && (
					<span
						slot="indicator"
						className="codicon codicon-settings"
					></span>
				)}
				{options.map((_, index) => (
					<VSCodeOption
						value={`option-${index + 1}`}
						key={`option-${index + 1}`}
					>
						Option #{index + 1}
					</VSCodeOption>
				))}
			</VSCodeDropdown>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {};

export const WithDisabled = Template.bind({});
WithDisabled.args = {
	disabled: true,
};

export const WithOpen = Template.bind({});
WithOpen.args = {
	open: true,
};

export const WithPositionAbove = Template.bind({});
WithPositionAbove.args = {
	position: 'above',
};

export const WithCustomIndicator = Template.bind({});
WithCustomIndicator.args = {
	customIndicator: true,
};
