// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Dropdown} from '../index.js';
import {Option} from '../../option/index.js';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index.js';

export type DropdownArgs = {
	isOpen: boolean;
	position: string;
	isDisabled: boolean;
	isFocused: boolean;
	customIndicator: boolean;
	numberOfChildren: number;
	onChange: any;
};

export function createDropdown({
	isOpen,
	position,
	isDisabled,
	isFocused,
	customIndicator,
	numberOfChildren,
	onChange,
}: DropdownArgs) {
	const dropdown = createDropdownWithNChildren(numberOfChildren);

	if (isOpen) {
		dropdown.setAttribute('open', '');
	}
	if (position) {
		dropdown.setAttribute('position', position.toLowerCase());
	}
	if (isDisabled) {
		dropdown.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(dropdown);
	}
	if (customIndicator) {
		const indicator = createCodiconIcon({
			iconName: 'settings',
			slotName: 'indicator',
		});
		dropdown.prepend(indicator);
	}
	dropdown.addEventListener('change', onChange);

	return dropdown;
}

function createDropdownWithNChildren(numberOfChildren: number) {
	const dropdown = new Dropdown();

	for (let i = 0; i < numberOfChildren; i++) {
		const option = new Option();
		option.textContent = `Option Label #${i + 1}`;
		dropdown.appendChild(option);
	}

	return dropdown;
}
