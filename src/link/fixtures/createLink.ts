import {LinkAppearance, VSCodeLink} from '../index';
import {focusObserver} from '../../utilities/storybook/index';

export type LinkArgs = {
	label: string;
	href: string;
	appearance?: LinkAppearance;
	isDisabled: boolean;
	isFocused: boolean;
};

export function createLink({
	label,
	href,
	appearance,
	isDisabled,
	isFocused,
}: LinkArgs) {
	const link = new VSCodeLink();

	link.textContent = label;
	if (href) {
		link.setAttribute('href', href);
	}
	if (appearance) {
		link.setAttribute('appearance', appearance.toLowerCase());
	}
	if (isDisabled) {
		link.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(link);
	}

	return link;
}
