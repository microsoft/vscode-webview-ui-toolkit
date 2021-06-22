// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeTag} from '../index';

export type TagArgs = {
	label?: string;
};

export function createTag({label}: TagArgs) {
	const tag = new VSCodeTag();

	if (label) {
		tag.textContent = label;
	}

	return tag;
}
