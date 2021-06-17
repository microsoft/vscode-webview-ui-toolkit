// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodePanelTab} from '../index';
import {
	createCodiconIcon,
	focusObserver,
} from '../../utilities/storybook/index';

export type PanelTabArgs = {
	title: string;
	isDisabled?: boolean;
	isFocused?: boolean;
	customIcon?: boolean;
};

export function createPanelTab({
	title,
	isDisabled,
	isFocused,
	customIcon,
}: PanelTabArgs) {
	const panelTab = new VSCodePanelTab();

	if (title && !customIcon) {
		panelTab.textContent = title;
	}
	if (isDisabled) {
		panelTab.setAttribute('disabled', '');
	}
	if (isFocused) {
		focusObserver(panelTab);
	}
	if (customIcon) {
		const icon = createCodiconIcon({random: true});
		panelTab.prepend(icon);
	}

	return panelTab;
}
