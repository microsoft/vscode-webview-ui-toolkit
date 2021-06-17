// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeMenuItem} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type MenuItemArgs = {
	label?: string;
	isDisabled: boolean;
	isFocused: boolean;
};

export function createMenuItem({label, isDisabled, isFocused}: MenuItemArgs) {
	const menuItem = new VSCodeMenuItem();

	if (label) {
		menuItem.textContent = label;
	}
	if (isDisabled) {
		menuItem.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(menuItem);
	}

	return menuItem;
}
