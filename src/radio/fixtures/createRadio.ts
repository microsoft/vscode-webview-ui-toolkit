// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Radio} from '../index.js';
import {focusObserver} from '../../utilities/storybook/index.js';

export type RadioArgs = {
	label: string;
	isChecked: boolean;
	isReadonly: boolean;
	isDisabled: boolean;
	isFocused: boolean;
	onChange: any;
};

export function createRadio({
	label,
	isChecked,
	isReadonly,
	isDisabled,
	isFocused,
	onChange,
}: RadioArgs) {
	const radio = new Radio();

	if (label) {
		radio.textContent = label;
	}
	if (isChecked) {
		radio.setAttribute('checked', '');
	}
	if (isReadonly) {
		radio.setAttribute('readonly', '');
	}
	if (isDisabled) {
		radio.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(radio);
	}
	radio.addEventListener('change', onChange);

	return radio;
}
