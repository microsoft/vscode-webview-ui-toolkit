// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeTextField} from '../index';
import {createCodiconIcon} from '../../utilities/storybook/index';

export type TextFieldArgs = {
	label: string;
	placeholder: string;
	value: string;
	pattern: string;
	maxLength: number;
	size: number;
	isReadOnly: boolean;
	isDisabled: boolean;
	isAutoFocused: boolean;
	startIcon: boolean;
	endIcon: boolean;
};

export function createTextField({
	label,
	placeholder,
	value,
	pattern,
	maxLength,
	size,
	isReadOnly,
	isDisabled,
	isAutoFocused,
	startIcon,
	endIcon,
}: TextFieldArgs) {
	const textField = new VSCodeTextField();

	if (label) {
		textField.textContent = label;
	}
	if (placeholder) {
		textField.setAttribute('placeholder', placeholder);
	}
	if (value) {
		textField.value = value;
	}
	if (pattern) {
		textField.setAttribute('pattern', pattern);
	}
	if (maxLength) {
		textField.setAttribute('maxlength', maxLength.toString());
	}
	if (size) {
		textField.setAttribute('size', size.toString());
	}
	if (isReadOnly) {
		textField.setAttribute('readonly', '');
	}
	if (isDisabled) {
		textField.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		textField.setAttribute('autofocus', '');
	}
	if (startIcon) {
		const start = createCodiconIcon({
			iconName: 'search',
			slotName: 'start',
		});
		textField.appendChild(start);
	}
	if (endIcon) {
		const end = createCodiconIcon({iconName: 'text-size', slotName: 'end'});
		textField.appendChild(end);
	}

	return textField;
}
