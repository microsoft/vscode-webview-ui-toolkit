// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {TextArea} from '../index.js';

export type TextAreaArgs = {
	label: string;
	placeholder: string;
	value: string;
	resize: string;
	cols: number;
	rows: number;
	maxLength: number;
	isReadOnly: boolean;
	isDisabled: boolean;
	isAutoFocused: boolean;
};

export function createTextArea({
	label,
	placeholder,
	value,
	resize,
	cols,
	rows,
	maxLength,
	isReadOnly,
	isDisabled,
	isAutoFocused,
}: TextAreaArgs) {
	const textArea = new TextArea();

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
