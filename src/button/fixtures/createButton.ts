import {VSCodeButton} from '../index';
import {focusObserver} from '../../utilities/focusObserver';
import {ButtonAppearance} from '../index';

export type ButtonArgs = {
	label: string;
	appearance?: ButtonAppearance;
	isDisabled: boolean;
	isFocused: boolean;
	onClick: any;
};

export function createButton({
	label,
	appearance,
	isDisabled,
	isFocused,
	onClick,
}: ButtonArgs) {
	const button = new VSCodeButton();

	button.textContent = label;
	button.addEventListener('click', onClick);
	if (appearance) {
		button.setAttribute('appearance', appearance.toLowerCase());
	}
	if (isDisabled) {
		button.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(button);
	}

	return button;
}
