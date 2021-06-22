// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeBreadcrumbItem} from '../index';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index';

export type BreadcrumbItemArgs = {
	label: string;
	href: string;
	startIcon: boolean;
	separatorIcon: boolean;
	endIcon: boolean;
	isFocused: boolean;
};

export function createBreadcrumbItem({
	label,
	href,
	startIcon,
	separatorIcon,
	endIcon,
	isFocused,
}: BreadcrumbItemArgs) {
	const breadcrumbItem = new VSCodeBreadcrumbItem();

	if (label) {
		breadcrumbItem.textContent = label;
	}
	if (href) {
		breadcrumbItem.setAttribute('href', href);
	}
	if (startIcon) {
		const start = createCodiconIcon({
			iconName: 'symbol-method',
			slotName: 'start',
		});
		breadcrumbItem.appendChild(start);
	}
	if (separatorIcon) {
		const separator = createCodiconIcon({
			iconName: 'chevron-right',
			slotName: 'separator',
		});
		breadcrumbItem.appendChild(separator);
	}
	if (endIcon) {
		const end = createCodiconIcon({
			iconName: 'symbol-method',
			slotName: 'end',
		});
		breadcrumbItem.appendChild(end);
	}
	if (isFocused) {
		focusObserver(breadcrumbItem);
	}

	return breadcrumbItem;
}
