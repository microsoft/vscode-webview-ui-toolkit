// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {RadioGroup} from '../index';
import {Radio} from '../../radio/index';

export type RadioGroupArgs = {
	label: string;
	orientation: string;
	numberOfChildren: number;
	isDisabled: boolean;
	isReadonly: boolean;
};

export function createRadioGroup({
	label,
	orientation,
	numberOfChildren,
	isDisabled,
	isReadonly,
}: RadioGroupArgs) {
	const radioGroup = createRadioGroupWithNChildren(numberOfChildren);

	if (label) {
		const labelElement = document.createElement('label');
		labelElement.setAttribute('slot', 'label');
		labelElement.textContent = label;
		radioGroup.prepend(labelElement);
	}
	if (orientation) {
		radioGroup.setAttribute('orientation', orientation.toLowerCase());
	}
	if (isDisabled) {
		radioGroup.setAttribute('disabled', '');
	}
	if (isReadonly) {
		radioGroup.setAttribute('readonly', '');
	}

	return radioGroup;
}

function createRadioGroupWithNChildren(numberOfChildren: number) {
	const radioGroup = new RadioGroup();

	for (let i = 0; i < numberOfChildren; i++) {
		const radio = new Radio();
		radio.textContent = 'Radio Label';
		radioGroup.appendChild(radio);
	}

	return radioGroup;
}
