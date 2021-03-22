import {
	customElement,
	ElementStyles,
	ViewTemplate,
} from '@microsoft/fast-element';
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
 * The VSCode Data Grid element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.datagrid/ DataGrid}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-data-grid>`
 */
@customElement({
	name: 'vscode-data-grid',
	template: gridTemplate,
	styles: gridStyles,
})
export class VSCodeDataGrid extends DataGrid {}

/**
 * Styles for the VSCode Data Grid component
 * @public
 */
export const DataGridStyles: ElementStyles = gridStyles;

/**
 * The VSCode Data Grid Row element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.datagridrow/ DataGridRow}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-data-grid-row>`
 */
@customElement({
	name: 'vscode-data-grid-row',
	template: rowTemplate,
	styles: rowStyles,
})
export class VSCodeDataGridRow extends DataGridRow {}

/**
 * Styles for the VSCode Data Grid Row component
 * @public
 */
export const DataGridRowStyles: ElementStyles = rowStyles;

/**
 * The VSCode Data Grid Cell element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.datagridcell/ DataGridCell}.
 *
 * @public
 * @remarks
 * HTML Element: `<vscode-data-grid-cell>`
 */
@customElement({
	name: 'vscode-data-grid-cell',
	template: cellTemplate,
	styles: cellStyles,
})
export class VSCodeDataGridCell extends DataGridCell {}

/**
 * Styles for the VSCode Data Grid Cell component
 * @public
 */
export const DataGridCellStyles: ElementStyles = cellStyles;
