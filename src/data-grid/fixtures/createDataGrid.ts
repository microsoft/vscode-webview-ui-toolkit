import {VSCodeDataGrid} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type DataGridArgs = {
	isDisabled: boolean;
	isFocused: boolean;
};

export function createDataGrid({isDisabled, isFocused}: DataGridArgs) {
	const dataGrid = new VSCodeDataGrid();

	dataGrid.rowsData = [
		{name: 'Rob', age: '19'},
		{name: 'Bob', age: '20'},
	];

	if (isDisabled) {
		dataGrid.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(dataGrid);
	}

	return dataGrid;
}
