import {customElement, ViewTemplate} from '@microsoft/fast-element';
import {
	createDataGridCellTemplate,
	createDataGridRowTemplate,
	createDataGridTemplate,
	DataGrid,
	DataGridCell,
	DataGridRow,
} from '@microsoft/fast-foundation';
import {DataGridStyles as gridStyles} from './data-grid.styles';
import {DataGridRowStyles as rowStyles} from './data-grid-row.styles';
import {DataGridCellStyles as cellStyles} from './data-grid-cell.styles';

const gridTemplate: ViewTemplate = createDataGridTemplate('vscode');
const rowTemplate: ViewTemplate = createDataGridRowTemplate('vscode');
const cellTemplate: ViewTemplate = createDataGridCellTemplate('vscode');

/**
 * The VS Code Data Grid element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.datagrid/ | DataGrid}.
 *
 * @remarks
 * HTML Element: `<vscode-data-grid>`
 *
 * @public
 */
@customElement({
	name: 'vscode-data-grid',
	template: gridTemplate,
	styles: gridStyles,
})
export class VSCodeDataGrid extends DataGrid {}

/**
 * The VS Code Data Grid Row element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.datagridrow/ | DataGridRow}.
 *
 * @remarks
 * HTML Element: `<vscode-data-grid-row>`
 *
 * @public
 */
@customElement({
	name: 'vscode-data-grid-row',
	template: rowTemplate,
	styles: rowStyles,
})
export class VSCodeDataGridRow extends DataGridRow {}

/**
 * The VS Code Data Grid Cell element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.datagridcell/ | DataGridCell}.
 *
 * @remarks
 * HTML Element: `<vscode-data-grid-cell>`
 *
 * @public
 */
@customElement({
	name: 'vscode-data-grid-cell',
	template: cellTemplate,
	styles: cellStyles,
})
export class VSCodeDataGridCell extends DataGridCell {}
