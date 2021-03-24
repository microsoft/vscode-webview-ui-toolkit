import {VSCodeBreadcrumbItem} from '../index';
import {focusObserver} from '../../utilities/storybook/index';
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
		const start = createCustomIcon('start', 'codicon-symbol-method');
		breadcrumbItem.appendChild(start);
	}
	if (separatorIcon) {
		const separator = createCustomIcon(
			'separator',
			'codicon-chevron-right'
		);
		breadcrumbItem.appendChild(separator);
	}
	if (endIcon) {
		const end = createCustomIcon('end', 'codicon-symbol-method');
		breadcrumbItem.appendChild(end);
	}
	if (isFocused) {
		focusObserver(breadcrumbItem);
	}

	return breadcrumbItem;
}

export function createCustomIcon(
	iconType: string,
	iconName: string
): HTMLElement {
	const icon = document.createElement('svg');
	icon.setAttribute('slot', iconType);
	icon.classList.add('codicon');
	icon.classList.add(iconName);
	return icon;
}
