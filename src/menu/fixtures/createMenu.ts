// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeMenu} from '../index';
import {VSCodeMenuItem} from '../../menu-item/index';
import {VSCodeDivider} from '../../divider/index';

export type MenuArgs = {
	numberOfChildren: number;
	withDividers: boolean;
};

export function createMenu({numberOfChildren, withDividers}: MenuArgs) {
	return createMenuWithNChildren(numberOfChildren, withDividers);
}

function createMenuWithNChildren(
	numberOfChildren: number,
	withDividers: boolean
) {
	const menu = new VSCodeMenu();

	for (let i = 0; i < numberOfChildren; i++) {
		const menuItem = new VSCodeMenuItem();
		menuItem.textContent = `Menu Item #${i + 1}`;
		menu.appendChild(menuItem);
		if (i % 2 === 0 && withDividers) {
			const divider = new VSCodeDivider();
			menu.appendChild(divider);
		}
	}

	return menu;
}
