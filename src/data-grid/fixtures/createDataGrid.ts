import {VSCodeDataGrid} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type DataGridArgs = {
	gridData: any;
	isFocused: boolean;
};

export function createDataGrid({gridData, isFocused}: DataGridArgs) {
	const dataGrid = new VSCodeDataGrid();

	if (gridData) {
		dataGrid.rowsData = gridData;
	}
	if (isFocused) {
		focusObserver(dataGrid);
	}

	return dataGrid;
}
