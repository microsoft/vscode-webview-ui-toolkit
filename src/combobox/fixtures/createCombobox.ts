import {VSCodeCombobox} from '../index';
import {VSCodeOption} from '../../option';

export type ComboboxArgs = {
	placeholder?: string;
	value?: string;
	autocomplete?: string;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isRequired?: boolean;
	isAutoFocused?: boolean;
	position?: string;
	numberOfChildren: number;
	onChange: any;
};

export function createCombobox({
	placeholder,
	value,
	autocomplete,
	isReadOnly,
	isDisabled,
	isRequired,
	isAutoFocused,
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
	if (isReadOnly) {
		combobox.setAttribute('readonly', '');
	}
	if (isDisabled) {
		combobox.setAttribute('disabled', '');
	}
	if (isRequired) {
		combobox.setAttribute('required', '');
	}
	if (position) {
		combobox.setAttribute('position', position);
	}
	if (isAutoFocused) {
		combobox.setAttribute('autofocus', '');
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
