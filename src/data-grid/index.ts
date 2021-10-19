// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
	dataGridCellTemplate as cellTemplate,
	DataGrid,
	DataGridCell,
	DataGridRow,
	dataGridTemplate as gridTemplate,
	dataGridRowTemplate as rowTemplate,
} from '@microsoft/fast-foundation';
import {DataGridStyles as gridStyles} from './data-grid.styles';
import {DataGridRowStyles as rowStyles} from './data-grid-row.styles';
import {DataGridCellStyles as cellStyles} from './data-grid-cell.styles';

/**
 * The Visual Studio Code data grid class.
 *
 * @public
 */
export class VSCodeDataGrid extends DataGrid {
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
export const vsCodeDataGrid = DataGrid.compose({
	baseName: 'data-grid',
	template: gridTemplate,
	styles: gridStyles,
})

/**
 * The Visual Studio Code data grid row component registration.
 *
 * @remarks
 * HTML Element: `<vscode-data-grid-row>`
 *
 * @public
 */
export const vsCodeDataGridRow = DataGridRow.compose({
	baseName: 'data-grid-row',
	template: rowTemplate,
	styles: rowStyles,
})

/**
 * The Visual Studio Code data grid cell component registration.
 *
 * @remarks
 * HTML Element: `<vscode-data-grid-cell>`
 *
 * @public
 */
export const vsCodeDataGridCell = DataGridCell.compose({
	baseName: 'data-grid-cell',
	template: cellTemplate,
	styles: cellStyles,
})
