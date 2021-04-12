import {VSCodeSelect} from '../index';
import {VSCodeOption} from '../../option/index';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index';

export type SelectArgs = {
	isOpen: boolean;
	position: string;
	isDisabled: boolean;
	isFocused: boolean;
	customIndicator: boolean;
	numberOfChildren: number;
	onChange: any;
};

export function createSelect({
	isOpen,
	position,
	isDisabled,
	isFocused,
	customIndicator,
	numberOfChildren,
	onChange,
}: SelectArgs) {
	const select = createSelectWithNChildren(numberOfChildren);

	if (isOpen) {
		select.setAttribute('open', '');
	}
	if (position) {
		select.setAttribute('position', position.toLowerCase());
	}
	if (isDisabled) {
		select.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(select);
	}
	if (customIndicator) {
		const indicator = createCodiconIcon('settings', 'indicator');
		select.prepend(indicator);
	}
	select.addEventListener('change', onChange);

	return select;
}

function createSelectWithNChildren(numberOfChildren: number) {
	const select = new VSCodeSelect();

	for (let i = 0; i < numberOfChildren; i++) {
		const option = new VSCodeOption();
		option.textContent = `Option Label #${i + 1}`;
		select.appendChild(option);
	}

	return select;
}
