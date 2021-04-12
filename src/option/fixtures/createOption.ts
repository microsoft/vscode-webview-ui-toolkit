import {VSCodeOption} from '../index';
import {createCodiconIcon} from '../../utilities/storybook/index';

export type OptionArgs = {
	label?: string;
	isDisabled: boolean;
	isSelected: boolean;
	startIcon: boolean;
	endIcon: boolean;
};

export function createOption({
	label,
	isDisabled,
	isSelected,
	startIcon,
	endIcon,
}: OptionArgs) {
	const option = new VSCodeOption();

	if (label) {
		option.textContent = label;
	}
	if (isDisabled) {
		option.setAttribute('disabled', '');
	}
	if (isSelected) {
		option.setAttribute('selected', '');
	}
	if (startIcon) {
		const start = createCodiconIcon('check', 'start');
		option.appendChild(start);
	}
	if (endIcon) {
		const end = createCodiconIcon('bug', 'end');
		option.appendChild(end);
	}

	return option;
}
