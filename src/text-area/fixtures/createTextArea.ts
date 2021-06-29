// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeTextArea} from '../index';

export type TextAreaArgs = {
	label?: string;
	placeholder?: string;
	value?: string;
	resize?: string;
	cols?: number;
	rows?: number;
	minLength?: number;
	maxLength?: number;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isAutoFocused?: boolean;
};

export function createTextArea({
	label,
	placeholder,
	value,
	resize,
	cols,
	rows,
	minLength,
	maxLength,
	isReadOnly,
	isDisabled,
	isAutoFocused,
}: TextAreaArgs) {
	const textArea = new VSCodeTextArea();

	if (label) {
		textArea.textContent = label;
	}
	if (placeholder) {
		textArea.setAttribute('placeholder', placeholder);
	}
	if (value) {
		textArea.value = value;
	}
	if (resize) {
		textArea.setAttribute('resize', resize.toLowerCase());
	}
	if (cols) {
		textArea.setAttribute('cols', cols.toString());
	}
	if (rows) {
		textArea.setAttribute('rows', rows.toString());
	}
	if (minLength) {
		textArea.setAttribute('minlength', minLength.toString());
	}
	if (maxLength) {
		textArea.setAttribute('maxlength', maxLength.toString());
	}
	if (isReadOnly) {
		textArea.setAttribute('readonly', '');
	}
	if (isDisabled) {
		textArea.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		textArea.setAttribute('autofocus', '');
	}

	return textArea;
}
