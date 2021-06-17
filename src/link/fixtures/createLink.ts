// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeLink} from '../index';
import {createCodiconIcon} from '../../utilities/storybook/index';

export type LinkArgs = {
	label: string;
	href: string;
	isDisabled: boolean;
	startIcon: boolean;
	endIcon: boolean;
	iconOnly: boolean;
};

export function createLink({
	label,
	href,
	isDisabled,
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
	if (isDisabled) {
		link.setAttribute('disabled', '');
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
