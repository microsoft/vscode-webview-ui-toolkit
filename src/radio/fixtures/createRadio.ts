import {VSCodeRadio} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type RadioArgs = {
	label?: string;
	isChecked: boolean;
	isDisabled: boolean;
	isFocused: boolean;
	onChange: any;
};

export function createRadio({
	label,
	isChecked,
	isDisabled,
	isFocused,
	onChange,
}: RadioArgs) {
	const radio = new VSCodeRadio();

	if (label) {
		radio.textContent = label;
	}
	radio.setAttribute('checked', isChecked.toString());
	if (isDisabled) {
		radio.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(radio);
	}
	radio.addEventListener('change', onChange);

	return radio;
}
