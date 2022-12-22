// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {PanelTab} from '../index';
import {Badge} from '../../badge/index';
import {focusObserver} from '../../utilities/storybook/index';

export type PanelTabArgs = {
	title: string;
	isFocused?: boolean;
	hasBadge: boolean;
};

export function createPanelTab({title, isFocused, hasBadge}: PanelTabArgs) {
	const panelTab = new PanelTab();

	if (title) {
		panelTab.textContent = title;
	}
	if (isFocused) {
		focusObserver(panelTab);
	}
	if (hasBadge) {
		const badge = new Badge();
		badge.textContent = '1';
		badge.setAttribute('appearance', 'secondary');
		panelTab.append(badge);
	}

	return panelTab;
}
