// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Tag} from '../index.js';

export type TagArgs = {
	label: string;
};

export function createTag({label}: TagArgs) {
	const tag = new Tag();

	if (label) {
		tag.textContent = label;
	}

	return tag;
}
