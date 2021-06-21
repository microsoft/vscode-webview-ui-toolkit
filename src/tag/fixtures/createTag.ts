// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {TagAppearance, VSCodeTag} from '../index';

export type TagArgs = {
	label?: string;
	appearance?: TagAppearance;
};

export function createTag({label, appearance}: TagArgs) {
	const tag = new VSCodeTag();

	if (label) {
		tag.textContent = label;
	}
	if (appearance) {
		tag.setAttribute('appearance', appearance.toLowerCase());
	}

	return tag;
}
