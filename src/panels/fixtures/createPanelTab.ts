// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodePanelTab} from '../index';
import {VSCodeBadge} from '../../badge/index';
import {focusObserver} from '../../utilities/storybook/index';

export type PanelTabArgs = {
	title: string;
	isDisabled?: boolean;
	isFocused?: boolean;
	hasBadge?: boolean;
};

export function createPanelTab({
	title,
	isDisabled,
	isFocused,
	hasBadge,
}: PanelTabArgs) {
	const panelTab = new VSCodePanelTab();

	if (title) {
		panelTab.textContent = title;
	}
	if (isDisabled) {
		panelTab.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(panelTab);
	}
	if (hasBadge) {
		const badge = new VSCodeBadge();
		badge.textContent = '1';
		badge.setAttribute('appearance', 'secondary');
		panelTab.append(badge);
	}

	return panelTab;
}
