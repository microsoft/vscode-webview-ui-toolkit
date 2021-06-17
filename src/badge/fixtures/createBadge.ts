// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {BadgeAppearance, VSCodeBadge} from '../index';

export type BadgeArgs = {
	label: string;
	appearance?: BadgeAppearance;
	isCircular: boolean;
};

export function createBadge({label, appearance, isCircular}: BadgeArgs) {
	const badge = new VSCodeBadge();

	badge.textContent = label;
	if (appearance) {
		badge.setAttribute('appearance', appearance.toLowerCase());
	}
	if (isCircular) {
		badge.setAttribute('circular', '');
	}

	return badge;
}
