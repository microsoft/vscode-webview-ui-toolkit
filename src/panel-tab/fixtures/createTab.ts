import {VSCodeTab} from '../index';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index';

export type TabArgs = {
	title: string;
	isDisabled?: boolean;
	isFocused?: boolean;
	customIcon?: boolean;
};

export function createTab({title, isDisabled, isFocused, customIcon}: TabArgs) {
	const tab = new VSCodeTab();

	if (title && !customIcon) {
		tab.textContent = title;
	}
	if (isDisabled) {
		tab.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(tab);
	}
	if (customIcon) {
		const icon = createCodiconIcon({random: true});
		tab.prepend(icon);
	}

	return tab;
}
