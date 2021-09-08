// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeBadge} from '../index';

export type BadgeArgs = {
	label: string;
};

export function createBadge({label}: BadgeArgs) {
	const badge = new VSCodeBadge();

	if (label) {
		badge.textContent = label;
	}

	return badge;
}
