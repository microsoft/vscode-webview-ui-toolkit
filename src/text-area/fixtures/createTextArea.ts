import {VSCodeTextArea} from '../index';

export type TextAreaArgs = {
	label?: string;
	placeholder?: string;
	value?: string;
	resize?: string;
	minLength?: number;
	maxLength?: number;
	isRequired?: boolean;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isAutoFocused?: boolean;
};

export function createTextArea({
	label,
	placeholder,
	value,
	resize,
	minLength,
	maxLength,
	isRequired,
	isReadOnly,
	isDisabled,
	isAutoFocused,
}: TextAreaArgs) {
	const textArea = new VSCodeTextArea();

	if (label) {
		textArea.textContent = label;
	}
	if (placeholder) {
		textArea.setAttribute('placeholder', placeholder);
	}
	if (value) {
		textArea.value = value;
	}
	if (resize) {
		textArea.setAttribute('resize', resize.toLowerCase());
	}
	if (minLength) {
		textArea.setAttribute('minlength', minLength.toString());
	}
	if (maxLength) {
		textArea.setAttribute('maxlength', maxLength.toString());
	}
	if (isRequired) {
		textArea.setAttribute('required', '');
	}
	if (isReadOnly) {
		textArea.setAttribute('readonly', '');
		textArea.setAttribute('value', 'Read Only Text');
	}
	if (isDisabled) {
		textArea.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		textArea.setAttribute('autofocus', '');
	}

	return textArea;
}
