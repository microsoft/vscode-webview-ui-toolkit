import {LinkAppearance, VSCodeLink} from '../index';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index';

export type LinkArgs = {
	label: string;
	href: string;
	appearance?: LinkAppearance;
	isDisabled: boolean;
	isAutoFocused: boolean;
	startIcon: boolean;
	endIcon: boolean;
	iconOnly: boolean;
};

export function createLink({
	label,
	href,
	appearance,
	isDisabled,
	isAutoFocused,
	startIcon,
	endIcon,
	iconOnly,
}: LinkArgs) {
	const link = new VSCodeLink();

	if (label && !iconOnly) {
		link.textContent = label;
	}
	if (href) {
		link.setAttribute('href', href);
	}
	if (appearance) {
		link.setAttribute('appearance', appearance.toLowerCase());
	}
	if (isDisabled) {
		link.setAttribute('disabled', '');
	}
	if (isAutoFocused) {
		link.setAttribute('autofocus', '');
		// Focus observer will force focus if button focus is lost after page load
		focusObserver(link);
	}
	if (startIcon) {
		const start = createCodiconIcon({
			iconName: 'git-merge',
			slotName: 'start',
		});
		link.appendChild(start);
	}
	if (endIcon) {
		const end = createCodiconIcon({
			iconName: 'chevron-right',
			slotName: 'end',
		});
		link.appendChild(end);
	}
	if (iconOnly) {
		const icon = createCodiconIcon({iconName: 'check'});
		link.appendChild(icon);
	}

	return link;
}
