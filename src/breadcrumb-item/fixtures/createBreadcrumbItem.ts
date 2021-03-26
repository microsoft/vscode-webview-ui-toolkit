import {VSCodeBreadcrumbItem} from '../index';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index';
import '../../../node_modules/vscode-codicons/dist/codicon.css';

export type BreadcrumbItemArgs = {
	label: string;
	href: string;
	customElement: boolean;
	startIcon: boolean;
	separatorIcon: boolean;
	endIcon: boolean;
	isFocused: boolean;
};

export function createBreadcrumbItem({
	label,
	href,
	customElement,
	startIcon,
	separatorIcon,
	endIcon,
	isFocused,
}: BreadcrumbItemArgs) {
	const breadcrumbItem = new VSCodeBreadcrumbItem();

	if (label && !customElement) {
		breadcrumbItem.textContent = label;
	}
	breadcrumbItem.setAttribute('href', href);
	if (customElement) {
		const button = document.createElement('vscode-button');
		button.textContent =
			'Button Element (But This Could Be Any Valid HTML)';
		breadcrumbItem.appendChild(button);
	}
	if (startIcon) {
		const start = createCodiconIcon('symbol-method', 'start');
		breadcrumbItem.appendChild(start);
	}
	if (separatorIcon) {
		const separator = createCodiconIcon('chevron-right', 'separator');
		breadcrumbItem.appendChild(separator);
	}
	if (endIcon) {
		const end = createCodiconIcon('symbol-method', 'end');
		breadcrumbItem.appendChild(end);
	}
	if (isFocused) {
		focusObserver(breadcrumbItem);
	}

	return breadcrumbItem;
}
