import {VSCodeCombobox} from '../index';
import {VSCodeOption} from '../../option';

export type ComboboxArgs = {
	placeholder?: string;
	value?: string;
	autocomplete?: string;
	isDisabled?: boolean;
	isOpen?: boolean;
	position?: string;
	numberOfChildren: number;
	onChange: any;
};

export function createCombobox({
	placeholder,
	value,
	autocomplete,
	isDisabled,
	isOpen,
	position,
	numberOfChildren,
	onChange,
}: ComboboxArgs) {
	const combobox = createComboboxWithNChildren(numberOfChildren);

	if (placeholder) {
		combobox.setAttribute('placeholder', placeholder);
	}
	if (value) {
		combobox.value = value;
	}
	if (autocomplete) {
		combobox.setAttribute('autocomplete', autocomplete);
	}
	if (isDisabled) {
		combobox.setAttribute('disabled', '');
	}
	if (isOpen) {
		combobox.setAttribute('open', '');
	}
	if (position) {
		combobox.setAttribute('position', position);
	}
	combobox.addEventListener('change', onChange);

	return combobox;
}

function createComboboxWithNChildren(numberOfChildren: number) {
	const combobox = new VSCodeCombobox();

	for (let i = 0; i < numberOfChildren; i++) {
		const option = new VSCodeOption();
		option.textContent = `Option Label #${i + 1}`;
		combobox.appendChild(option);
	}

	return combobox;
}
