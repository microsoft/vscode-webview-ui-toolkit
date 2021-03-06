import {VSCodeSelect} from '../index';
import {VSCodeOption} from '../../option/index';
import {focusObserver} from '../../utilities/storybook/index';

export type SelectArgs = {
	label?: string;
	isDisabled: boolean;
	isFocused: boolean;
	numberOfChildren: number;
	onChange: any;
};

export function createSelect({
	label,
	isDisabled,
	isFocused,
	numberOfChildren,
	onChange,
}: SelectArgs) {
	const select = createSelectWithNChildren(numberOfChildren);

	if (label) {
		select.textContent = label;
	}
	if (isDisabled) {
		select.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(select);
	}
	select.addEventListener('change', onChange);

	return select;
}

function createSelectWithNChildren(numberOfChildren: number) {
	const select = new VSCodeSelect();

	for (let i = 0; i < numberOfChildren; i++) {
		const option = new VSCodeOption();
		option.textContent = 'Option Label';
		select.appendChild(option);
	}

	return select;
}
