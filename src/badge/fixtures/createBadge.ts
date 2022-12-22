// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Badge} from '../index.js';

export type BadgeArgs = {
	label: string;
};

export function createBadge({label}: BadgeArgs) {
	const badge = new Badge();

	if (label) {
		badge.textContent = label;
	}

	return badge;
}
