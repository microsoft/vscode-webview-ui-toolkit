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

// @ts-ignore
VSCodeDataGrid.displayName = 'VSCodeDataGrid';
// @ts-ignore
VSCodeDataGridCell.displayName = 'VSCodeDataGridCell';
// @ts-ignore
VSCodeDataGridRow.displayName = 'VSCodeDataGridRow';

export default {
	title: 'Library/Data Grid',
	component: VSCodeDataGrid,
	argTypes: {
		'generateHeader': {
			control: {
				type: 'select',
				options: ['default', 'sticky'],
			},
		},
		'numCols': {
			control: 'number',
		},
		'numRows': {
			control: 'number',
		},
		'gridTemplateColumns': {control: 'text'},
		'aria-label': {defaultValue: 'Basic', control: 'text'},
	},
};

const Template = args => {
	const {generateHeader, gridTemplateColumns, numCols, numRows, ...rest} =
		args;

	const colCells = Array.from({length: numCols}, (_, i) => i);
	const rowCells = Array.from({length: numRows}, (_, i) => i);

	return (
		<VSCodeDataGrid
			gridTemplateColumns={gridTemplateColumns}
			generateHeader={generateHeader}
			{...rest}
		>
			<VSCodeDataGridRow
				rowType={
					generateHeader === 'sticky'
						? DataGridRowTypes.stickyHeader
						: DataGridRowTypes.header
				}
			>
				{colCells.map((_, index) => (
					<VSCodeDataGridCell
						cell-type="columnheader"
						gridColumn={`${index + 1}`}
						key={`${index + 1}`}
					>
						Header {index + 1}
					</VSCodeDataGridCell>
				))}
			</VSCodeDataGridRow>
			{rowCells.map((_, rowIndex) => {
				return (
					<VSCodeDataGridRow key={rowIndex}>
						{colCells.map((_, index) => (
							<VSCodeDataGridCell
								key={`${index + 1}`}
								gridColumn={`${index + 1}`}
							>
								Row {rowIndex + 1} Cell {index + 1}
							</VSCodeDataGridCell>
						))}
					</VSCodeDataGridRow>
				);
			})}
		</VSCodeDataGrid>
	);
};

export const Default = Template.bind({});
Default.args = {
	'generateHeader': 'default',
	'numCols': 4,
	'numRows': 4,
	'aria-label': 'Basic',
};

export const WithStickyHeader = Template.bind({});
WithStickyHeader.args = {
	...Default.args,
	numRows: 20,
	generateHeader: 'sticky',
};

export const WithCustomColumnWidths: any = Template.bind({});
WithCustomColumnWidths.args = {
	...Default.args,
	gridTemplateColumns: '100px 10vw 3fr 30%',
};
