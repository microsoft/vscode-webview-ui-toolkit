// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeCheckbox} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type CheckboxArgs = {
	label?: string;
	isChecked: boolean;
	isIndeterminate: boolean;
	isDisabled: boolean;
	isAutoFocused: boolean;
	isReadOnly: boolean;
	isRequired: boolean;
	hasValue: boolean;
	onChange: any;
};

export function createCheckbox({
	label,
	isChecked,
	isIndeterminate,
	isDisabled,
	isAutoFocused,
	isReadOnly,
	isRequired,
	hasValue,
	onChange,
}: CheckboxArgs) {
	const checkbox = new VSCodeCheckbox();

	if (label) {
		checkbox.textContent = label;
	}
	if (isChecked) {
		checkbox.setAttribute('checked', isChecked.toString());
	}
	if (isIndeterminate) {
		checkbox.indeterminate = isIndeterminate;
	}
	if (isDisabled) {
		checkbox.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		checkbox.setAttribute('autofocus', '');
		// Focus observer will force focus if checkbox focus is lost after page load
		focusObserver(checkbox);
	}
	if (isReadOnly) {
		checkbox.setAttribute('readonly', '');
	}
	if (isRequired) {
		checkbox.setAttribute('required', '');
	}
	if (hasValue) {
		checkbox.setAttribute('value', 'foo');
	}
	checkbox.addEventListener('change', onChange);

	return checkbox;
}
