// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	dataGridCellTemplate as cellTemplate,
	DataGridCellTypes,
	DataGridRowTypes,
	DataGrid as FoundationDataGrid,
	DataGridCell as FoundationDataGridCell,
	DataGridRow as FoundationDataGridRow,
	FoundationElementDefinition,
	GenerateHeaderOptions,
	dataGridTemplate as gridTemplate,
	dataGridRowTemplate as rowTemplate,
} from '@microsoft/fast-foundation';
import {dataGridStyles as gridStyles} from './data-grid.styles.js';
import {dataGridRowStyles as rowStyles} from './data-grid-row.styles.js';
import {dataGridCellStyles as cellStyles} from './data-grid-cell.styles.js';

export {DataGridCellTypes, DataGridRowTypes, GenerateHeaderOptions};

/**
 * The Visual Studio Code data grid class.
 *
 * @public
 */
export class DataGrid extends FoundationDataGrid {
	/**
	 * Component lifecycle method that runs when the component is inserted
	 * into the DOM.
	 *
	 * @internal
	 */
	public connectedCallback() {
		super.connectedCallback();

		// Sets a default ARIA label on the data grid only if an aria-label attribute
		// does not already exist
		const ariaLabelValue = this.getAttribute('aria-label');
		if (!ariaLabelValue) {
			this.setAttribute('aria-label', 'Data Grid');
		}
	}
}

/**
 * The Visual Studio Code data grid component registration.
 *
 * @remarks
 * HTML Element: `<vscode-data-grid>`
 *
 * @public
 */
export const vsCodeDataGrid = DataGrid.compose<
	FoundationElementDefinition,
	typeof DataGrid
>({
	baseName: 'data-grid',
	baseClass: FoundationDataGrid,
	template: gridTemplate,
	styles: gridStyles,
});

/**
 * The Visual Studio Code data grid row class.
 *
 * @public
 */
export class DataGridRow extends FoundationDataGridRow {}

/**
 * The Visual Studio Code data grid row component registration.
 *
 * @remarks
 * HTML Element: `<vscode-data-grid-row>`
 *
 * @public
 */
export const vsCodeDataGridRow = DataGridRow.compose<
	FoundationElementDefinition,
	typeof DataGridRow
>({
	baseName: 'data-grid-row',
	baseClass: FoundationDataGridRow,
	template: rowTemplate,
	styles: rowStyles,
});

/**
 * The Visual Studio Code data grid cell class.
 *
 * @public
 */
export class DataGridCell extends FoundationDataGridCell {}

/**
 * The Visual Studio Code data grid cell component registration.
 *
 * @remarks
 * HTML Element: `<vscode-data-grid-cell>`
 *
 * @public
 */
export const vsCodeDataGridCell = DataGridCell.compose<
	FoundationElementDefinition,
	typeof DataGridCell
>({
	baseName: 'data-grid-cell',
	baseClass: FoundationDataGridCell,
	template: cellTemplate,
	styles: cellStyles,
});
