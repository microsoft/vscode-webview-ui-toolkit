// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeDropdown} from '../index';
import {VSCodeOption} from '../../option/index';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index';

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
	const dropdown = new VSCodeDropdown();

	for (let i = 0; i < numberOfChildren; i++) {
		const option = new VSCodeOption();
		option.textContent = `Option Label #${i + 1}`;
		dropdown.appendChild(option);
	}

	return dropdown;
}
