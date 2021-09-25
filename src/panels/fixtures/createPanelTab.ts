// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodePanelTab} from '../index';
import {VSCodeBadge} from '../../badge/index';
import {focusObserver} from '../../utilities/storybook/index';

export type PanelTabArgs = {
	title: string;
	isFocused?: boolean;
	hasBadge: boolean;
};

export function createPanelTab({title, isFocused, hasBadge}: PanelTabArgs) {
	const panelTab = new VSCodePanelTab();

	if (title) {
		panelTab.textContent = title;
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
