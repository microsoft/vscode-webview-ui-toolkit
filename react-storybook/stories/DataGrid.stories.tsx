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
		'numCols': {
			defaultValue: 4,
			control: 'number',
		},
		'numRows': {
			defaultValue: 4,
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
Default.args = {};
