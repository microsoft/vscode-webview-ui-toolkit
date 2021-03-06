import {VSCodeSelect} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type SelectArgs = {
	label?: string;
	isDisabled: boolean;
	isFocused: boolean;
	onChange: any;
};

export function createSelect({
	label,
	isDisabled,
	isFocused,
	onChange,
}: SelectArgs) {
	const select = new VSCodeSelect();

	if (label) {
		select.textContent = label;
	}
	if (isDisabled) {
		select.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(select);
	}
	select.addEventListener('change', onChange);

	return select;
}
