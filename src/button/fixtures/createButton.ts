import {VSCodeButton} from '../index';

export type ButtonArgs = {
	label: string;
	onClick: any;
	isDisabled: boolean;
	isFocused: boolean;
};

export function createButton({
	label,
	onClick,
	isDisabled,
	isFocused,
}: ButtonArgs) {
	const button = new VSCodeButton();

	button.textContent = label;
	button.addEventListener('click', onClick);
	if (isDisabled) {
		button.setAttribute('disabled', '');
	}
	if (isFocused) {
		window.addEventListener('load', () => {
			button.focus();
		});
	}

	return button;
}
