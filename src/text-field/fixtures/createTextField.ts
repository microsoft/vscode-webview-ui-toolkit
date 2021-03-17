import {VSCodeTextField} from '../index';

export type TextFieldArgs = {
	label?: string;
	placeholder?: string;
	value?: string;
	minLength?: number;
	maxLength?: number;
	isRequired?: boolean;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isAutoFocused?: boolean;
};

export function createTextField({
	label,
	placeholder,
	value,
	minLength,
	maxLength,
	isRequired,
	isReadOnly,
	isDisabled,
	isAutoFocused,
}: TextFieldArgs) {
	const textField = new VSCodeTextField();

	if (label) {
		textField.textContent = label;
	}
	if (placeholder) {
		textField.setAttribute('placeholder', placeholder);
	}
	if (value) {
		textField.value = value;
	}
	if (minLength) {
		textField.setAttribute('minlength', minLength.toString());
	}
	if (maxLength) {
		textField.setAttribute('maxlength', maxLength.toString());
	}
	if (isRequired) {
		textField.setAttribute('required', '');
	}
	if (isReadOnly) {
		textField.setAttribute('readonly', '');
		textField.setAttribute('value', 'Read Only Text');
	}
	if (isDisabled) {
		textField.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		textField.setAttribute('autofocus', '');
	}

	return textField;
}
