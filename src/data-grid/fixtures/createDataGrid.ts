// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeDataGrid} from '../index';

export type DataGridArgs = {
	gridData: any;
	generateHeader: string;
	gridTemplateColumns: string;
	hasCustomTitles: boolean;
	ariaLabel: string;
};

export function createDataGrid({
	gridData,
	generateHeader,
	gridTemplateColumns,
	hasCustomTitles,
	ariaLabel,
}: DataGridArgs) {
	const dataGrid = new VSCodeDataGrid();

	if (gridData) {
		dataGrid.rowsData = gridData;
	}
	if (generateHeader) {
		dataGrid.setAttribute('generate-header', generateHeader.toLowerCase());
	}
	if (gridTemplateColumns) {
		dataGrid.setAttribute('grid-template-columns', gridTemplateColumns);
	}
	if (hasCustomTitles) {
		dataGrid.columnDefinitions = [
			{
				columnDataKey: 'Header1',
				title: 'A Custom Header Title',
			},
			{
				columnDataKey: 'Header2',
				title: 'Another Custom Title',
			},
			{
				columnDataKey: 'Header3',
				title: 'Title Is Custom',
			},
			{
				columnDataKey: 'Header4',
				title: 'Custom Title',
			},
		];
	}
	if (ariaLabel) {
		dataGrid.setAttribute('aria-label', ariaLabel);
	}

	return dataGrid;
}
