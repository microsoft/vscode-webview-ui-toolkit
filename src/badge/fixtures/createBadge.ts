// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {BadgeAppearance, VSCodeBadge} from '../index';

export type BadgeArgs = {
	label: string;
	appearance?: BadgeAppearance;
};

export function createBadge({label, appearance}: BadgeArgs) {
	const badge = new VSCodeBadge();

	if (label) {
		badge.textContent = label;
	}
	if (appearance) {
		badge.setAttribute('appearance', appearance.toLowerCase());
	}

	return badge;
}
