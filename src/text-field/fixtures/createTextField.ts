// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {TextField} from '../index';
import {createCodiconIcon} from '../../utilities/storybook/index';

type TextFieldType = 'email' | 'password' | 'tel' | 'text' | 'url';

export type TextFieldArgs = {
	label: string;
	placeholder: string;
	value: string;
	maxLength: number;
	size: number;
	type: TextFieldType;
	isReadOnly: boolean;
	isDisabled: boolean;
	isAutoFocused: boolean;
	startIcon: boolean;
	endIcon: boolean;
	multipleIcons: boolean;
};

export function createTextField({
	label,
	placeholder,
	value,
	maxLength,
	size,
	type,
	isReadOnly,
	isDisabled,
	isAutoFocused,
	startIcon,
	endIcon,
	multipleIcons,
}: TextFieldArgs) {
	const textField = new TextField();

	if (label) {
		textField.textContent = label;
	}
	if (placeholder) {
		textField.setAttribute('placeholder', placeholder);
	}
	if (value) {
		textField.value = value;
	}
	if (maxLength) {
		textField.setAttribute('maxlength', maxLength.toString());
	}
	if (size) {
		textField.setAttribute('size', size.toString());
	}
	if (type) {
		textField.setAttribute('type', type.toLowerCase());
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
	if (multipleIcons) {
		const section = document.createElement('section');
		section.setAttribute('slot', 'end');
		section.style.display = 'flex';
		section.style.alignItems = 'center';

		section.innerHTML = /*html*/ `
			<vscode-button appearance="icon" aria-label="Match Case">
					<span class="codicon codicon-case-sensitive"></span>
			</vscode-button>
			<vscode-button appearance="icon" aria-label="Match Whole Word">
					<span class="codicon codicon-whole-word"></span>
			</vscode-button>
			<vscode-button appearance="icon" aria-label="Use Regular Expression">
					<span class="codicon codicon-regex"></span>
			</vscode-button>
		`;

		textField.appendChild(section);
	}

	return textField;
}
