import {VSCodeSwitch} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type SwitchArgs = {
	label?: string;
	checkedMessage?: string;
	unCheckedMessage?: string;
	isChecked?: boolean;
	isRequired?: boolean;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isFocused?: boolean;
};

export function createSwitch({
	label,
	checkedMessage,
	unCheckedMessage,
	isChecked,
	isRequired,
	isReadOnly,
	isDisabled,
	isFocused,
}: SwitchArgs) {
	const switchElement = new VSCodeSwitch();

	if (label) {
		switchElement.textContent = label;
	}
	if (checkedMessage) {
		const span = document.createElement('span');
		span.textContent = checkedMessage;
		span.setAttribute('slot', 'checked-message');
		switchElement.appendChild(span);
	}
	if (unCheckedMessage) {
		const span = document.createElement('span');
		span.textContent = unCheckedMessage;
		span.setAttribute('slot', 'unchecked-message');
		switchElement.appendChild(span);
	}
	if (isChecked) {
		switchElement.setAttribute('checked', '');
	}
	if (isRequired) {
		switchElement.setAttribute('required', '');
	}
	if (isReadOnly) {
		switchElement.setAttribute('readonly', '');
	}
	if (isDisabled) {
		switchElement.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(switchElement);
	}

	return switchElement;
}
