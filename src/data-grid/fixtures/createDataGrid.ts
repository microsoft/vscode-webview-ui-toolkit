// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {html} from '@microsoft/fast-element';
import type {DataGridCell} from '@microsoft/fast-foundation';
import {VSCodeDataGrid} from '../index';

export type DataGridArgs = {
	gridData: any;
	generateHeader: string;
	gridTemplateComlumns: string;
	hasCustomTitles: boolean;
	hasCustomHeaderCell: boolean;
	hasCustomCell: boolean;
};

export function createDataGrid({
	gridData,
	generateHeader,
	gridTemplateComlumns,
	hasCustomTitles,
	hasCustomHeaderCell,
	hasCustomCell,
}: DataGridArgs) {
	const dataGrid = new VSCodeDataGrid();

	if (gridData) {
		dataGrid.rowsData = gridData;
	}
	if (generateHeader) {
		dataGrid.setAttribute('generate-header', generateHeader.toLowerCase());
	}
	if (gridTemplateComlumns) {
		dataGrid.setAttribute('grid-template-columns', gridTemplateComlumns);
	}
	if (hasCustomTitles) {
		dataGrid.columnDefinitions = [
			{
				title: 'A Custom Header Title',
				columnDataKey: 'Header1',
			},
			{
				title: 'Another Custom Title',
				columnDataKey: 'Header2',
			},
			{
				title: 'Title Is Custom',
				columnDataKey: 'Header3',
			},
			{
				title: 'Custom Title',
				columnDataKey: 'Header4',
			},
		];
	}
	if (hasCustomHeaderCell) {
		// dataGrid.headerCellItemTemplate = customHeaderCellItemTemplate;
		dataGrid.columnDefinitions = [
			{
				columnDataKey: 'Header1',
				headerCellTemplate: buttonCellTemplate,
				headerCellFocusTargetCallback: getFocusTarget,
			},
			{
				columnDataKey: 'Header2',
				headerCellTemplate: buttonCellTemplate,
				headerCellFocusTargetCallback: getFocusTarget,
			},
			{
				columnDataKey: 'Header3',
				headerCellTemplate: buttonCellTemplate,
				headerCellFocusTargetCallback: getFocusTarget,
			},
			{
				columnDataKey: 'Header4',
				headerCellTemplate: buttonCellTemplate,
				headerCellFocusTargetCallback: getFocusTarget,
			},
		];
	}
	if (hasCustomCell) {
		// dataGrid.cellItemTemplate = customCellItemTemplate;
		dataGrid.columnDefinitions = [
			{
				columnDataKey: 'Header1',
				cellTemplate: buttonCellTemplate,
				cellFocusTargetCallback: getFocusTarget,
			},
			{
				columnDataKey: 'Header2',
				cellTemplate: buttonCellTemplate,
				cellFocusTargetCallback: getFocusTarget,
			},
			{
				columnDataKey: 'Header3',
				cellTemplate: buttonCellTemplate,
				cellFocusTargetCallback: getFocusTarget,
			},
			{
				columnDataKey: 'Header4',
				cellTemplate: buttonCellTemplate,
				cellFocusTargetCallback: getFocusTarget,
			},
		];
	}

	return dataGrid;
}

// const customHeaderCellItemTemplate = html`
// 	<vscode-data-grid-cell
// 		style="color: black; background: coral; border-radius: 7px; margin: 0 5px;"
// 		cell-type="columnheader"
// 		grid-column="${(_, executionContext) => executionContext.index + 1}"
// 		:columnDefinition="${columnMetaData => columnMetaData}"
// 	></vscode-data-grid-cell>
// `;

// const customCellItemTemplate = html`
// 	<vscode-data-grid-cell
// 		style="color: black; background: cornflowerblue; border-radius: 7px; margin: 0 5px;"
// 		grid-column="${(_, executionContext) => executionContext.index + 1}"
// 		:rowData="${(_, executionContext) => executionContext.parent.rowData}"
// 		:columnDefinition="${columnMetaData => columnMetaData}"
// 	></vscode-data-grid-cell>
// `;

const buttonCellTemplate = html<DataGridCell>`
	<template>
		<vscode-button @click="${handleClick}" style="width: 100%;">
			${cell => populateWithCellData(cell)}
		</vscode-button>
	</template>
`;

function handleClick(): void {
	alert('Cell Clicked!');
}

function populateWithCellData(cell: DataGridCell) {
	if (cell.columnDefinition) {
		const columnMetaData = cell.columnDefinition;
		const columnKey = columnMetaData.columnDataKey;

		if (cell.cellType === 'columnheader') {
			// If the cell is a header cell, return the cell title or column key
			return columnMetaData.title ? columnMetaData.title : columnKey;
		} else {
			// If the cell is a default cell, return the cell data
			if (cell.rowData) {
				const parentRow = cell.rowData;
				const cellData = parentRow[columnKey];
				return cellData;
			}
		}
	}
}

function getFocusTarget(cell: DataGridCell): HTMLElement {
	return cell.querySelector('vscode-button');
}
