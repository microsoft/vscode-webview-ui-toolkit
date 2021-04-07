import {VSCodeTextField} from '../index';
import {createCodiconIcon} from '../../utilities/storybook/index';
import '../../../node_modules/vscode-codicons/dist/codicon.css';

export type TextFieldArgs = {
	label?: string;
	placeholder?: string;
	value?: string;
	pattern?: string;
	minLength?: number;
	maxLength?: number;
	size?: number;
	isRequired?: boolean;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isAutoFocused?: boolean;
	startIcon: boolean;
	endIcon: boolean;
};

export function createTextField({
	label,
	placeholder,
	value,
	pattern,
	minLength,
	maxLength,
	size,
	isRequired,
	isReadOnly,
	isDisabled,
	isAutoFocused,
	startIcon,
	endIcon,
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
	if (pattern) {
		textField.setAttribute('pattern', pattern);
	}
	if (minLength) {
		textField.setAttribute('minlength', minLength.toString());
	}
	if (maxLength) {
		textField.setAttribute('maxlength', maxLength.toString());
	}
	if (size) {
		textField.setAttribute('size', size.toString());
	}
	if (isRequired) {
		textField.setAttribute('required', '');
	}
	if (isReadOnly) {
		textField.setAttribute('readonly', '');
	}
	if (isDisabled) {
		textField.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		textField.setAttribute('autofocus', '');
	}
	if (startIcon) {
		const start = createCodiconIcon('search', 'start');
		textField.appendChild(start);
	}
	if (endIcon) {
		const end = createCodiconIcon('text-size', 'end');
		textField.appendChild(end);
	}

	return textField;
}
