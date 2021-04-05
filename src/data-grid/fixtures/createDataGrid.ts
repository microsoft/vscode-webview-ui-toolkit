import {VSCodeDataGrid} from '../index';

export type DataGridArgs = {
	gridData: any;
	generateHeader: string;
	gridTemplateComlumns: string;
};

export function createDataGrid({
	gridData,
	generateHeader,
	gridTemplateComlumns,
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

	return dataGrid;
}
