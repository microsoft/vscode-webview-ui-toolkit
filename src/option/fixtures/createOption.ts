import {VSCodeOption} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type OptionArgs = {
	label?: string;
	isDisabled: boolean;
	isFocused: boolean;
};

export function createOption({label, isDisabled, isFocused}: OptionArgs) {
	const option = new VSCodeOption();

	if (label) {
		option.textContent = label;
	}
	if (isDisabled) {
		option.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(option);
	}

	return option;
}
