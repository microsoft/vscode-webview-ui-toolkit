import {
	DataGridRowTypes,
	GenerateHeaderOptions,
} from '@microsoft/fast-foundation';
import React from 'react';

import {
	VSCodeDataGrid,
	VSCodeDataGridCell,
	VSCodeDataGridRow,
} from '../../src/react';

export default {
	title: 'Library/Data Grid',
	component: VSCodeDataGrid,
	argTypes: {
		'generateHeader': {
			defaultValue: 'default',
			control: {
				type: 'select',
				options: ['default', 'sticky'],
			},
		},
		'gridTemplateColumns': {control: 'text'},
		'aria-label': {defaultValue: 'Basic', control: 'text'},
	},
};

const Template = args => {
	const {generateHeader, gridTemplateColumns, ...rest} = args;
	return (
		<VSCodeDataGrid
			gridTemplateColumns={gridTemplateColumns}
			generateHeader={generateHeader}
			{...rest}
		>
			<VSCodeDataGridRow rowType={DataGridRowTypes.default}>
				<VSCodeDataGridCell cell-type="columnheader" grid-column="1">
					Header 1
				</VSCodeDataGridCell>
				<VSCodeDataGridCell cell-type="columnheader" grid-column="2">
					Header 2
				</VSCodeDataGridCell>
				<VSCodeDataGridCell cell-type="columnheader" grid-column="3">
					Header 3
				</VSCodeDataGridCell>
				<VSCodeDataGridCell cell-type="columnheader" grid-column="4">
					Header 4
				</VSCodeDataGridCell>
			</VSCodeDataGridRow>
			<VSCodeDataGridRow>
				<VSCodeDataGridCell grid-column="1">
					Cell Data
				</VSCodeDataGridCell>
				<VSCodeDataGridCell grid-column="2">
					Cell Data
				</VSCodeDataGridCell>
				<VSCodeDataGridCell grid-column="3">
					Cell Data
				</VSCodeDataGridCell>
				<VSCodeDataGridCell grid-column="4">
					Cell Data
				</VSCodeDataGridCell>
			</VSCodeDataGridRow>
			<VSCodeDataGridRow>
				<VSCodeDataGridCell grid-column="1">
					Cell Data
				</VSCodeDataGridCell>
				<VSCodeDataGridCell grid-column="2">
					Cell Data
				</VSCodeDataGridCell>
				<VSCodeDataGridCell grid-column="3">
					Cell Data
				</VSCodeDataGridCell>
				<VSCodeDataGridCell grid-column="4">
					Cell Data
				</VSCodeDataGridCell>
			</VSCodeDataGridRow>
		</VSCodeDataGrid>
	);
};

export const Default = Template.bind({});
Default.args = {};
