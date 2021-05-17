import {VSCodeNumberField} from '../index';
import {createCodiconIcon} from '../../utilities/storybook/index';

export type NumberFieldArgs = {
	label?: string;
	placeholder?: string;
	value?: string;
	size?: number;
	isRequired?: boolean;
	isReadOnly?: boolean;
	isDisabled?: boolean;
	isAutoFocused?: boolean;
	startIcon: boolean;
};

export function createNumberField({
	label,
	placeholder,
	value,
	size,
	isRequired,
	isReadOnly,
	isDisabled,
	isAutoFocused,
	startIcon,
}: NumberFieldArgs) {
	const NumberField = new VSCodeNumberField();

	if (label) {
		NumberField.textContent = label;
	}
	if (placeholder) {
		NumberField.setAttribute('placeholder', placeholder);
	}
	if (value) {
		NumberField.value = value;
	}
	if (size) {
		NumberField.setAttribute('size', size.toString());
	}
	if (isRequired) {
		NumberField.setAttribute('required', '');
	}
	if (isReadOnly) {
		NumberField.setAttribute('readonly', '');
	}
	if (isDisabled) {
		NumberField.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		NumberField.setAttribute('autofocus', '');
	}
	if (startIcon) {
		const start = createCodiconIcon({
			iconName: 'search',
			slotName: 'start',
		});
		NumberField.appendChild(start);
	}

	return NumberField;
}
