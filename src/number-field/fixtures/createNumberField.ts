// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeNumberField} from '../index';
import {createCodiconIcon} from '../../utilities/storybook/index';

export type NumberFieldArgs = {
	label?: string;
	placeholder?: string;
	value?: string;
	size?: number;
	isRequired?: boolean;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isAutoFocused?: boolean;
	startIcon?: boolean;
};

export function createNumberField({
	label,
	placeholder,
	value,
	size,
	isRequired,
	isReadOnly,
	isDisabled,
	isAutoFocused,
	startIcon,
}: NumberFieldArgs) {
	const numberField = new VSCodeNumberField();

	if (label) {
		numberField.textContent = label;
	}
	if (placeholder) {
		numberField.setAttribute('placeholder', placeholder);
	}
	if (value) {
		numberField.value = value;
	}
	if (size) {
		numberField.setAttribute('size', size.toString());
	}
	if (isRequired) {
		numberField.setAttribute('required', '');
	}
	if (isReadOnly) {
		numberField.setAttribute('readonly', '');
	}
	if (isDisabled) {
		numberField.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		numberField.setAttribute('autofocus', '');
	}
	if (startIcon) {
		const start = createCodiconIcon({
			iconName: 'search',
			slotName: 'start',
		});
		numberField.appendChild(start);
	}

	return numberField;
}
