import {VSCodeMenu} from '../index';
import {VSCodeMenuItem} from '../../menu-item/index';

export type MenuArgs = {
	numberOfChildren: number;
};

export function createMenu({numberOfChildren}: MenuArgs) {
	return createMenuWithNChildren(numberOfChildren);
}

function createMenuWithNChildren(numberOfChildren: number) {
	const menu = new VSCodeMenu();

	for (let i = 0; i < numberOfChildren; i++) {
		const menuItem = new VSCodeMenuItem();
		menuItem.textContent = `Menu Item #${i + 1}`;
		menu.appendChild(menuItem);
	}

	return menu;
}
