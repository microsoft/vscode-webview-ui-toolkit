import {VSCodeButton} from '../index';

export type ButtonArgs = {
	label: string;
	onClick: any;
	disabled: boolean;
};

export function createButton({label, onClick, disabled}: ButtonArgs) {
	const button = new VSCodeButton();

	button.textContent = label;
	button.addEventListener('click', onClick);
	if (disabled) {
		button.setAttribute('disabled', '');
	}

	return button;
}
