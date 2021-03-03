import {VSCodeCheckbox} from '../index';
import {focusObserver} from '../../utilities/storybook/focusObserver';

export type CheckboxArgs = {
	label?: string;
	isChecked: boolean;
	isDisabled: boolean;
	isFocused: boolean;
	onChange: any;
};

export function createCheckbox({
	label,
	isChecked,
	isDisabled,
	isFocused,
	onChange,
}: CheckboxArgs) {
	const checkbox = new VSCodeCheckbox();

	if (label) {
		checkbox.textContent = label;
	}
	checkbox.setAttribute('checked', isChecked.toString());
	if (isDisabled) {
		checkbox.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(checkbox);
	}
	checkbox.addEventListener('change', onChange);

	return checkbox;
}
