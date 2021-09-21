// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeLink} from '../index';

export type LinkArgs = {
	label: string;
	href: string;
};

export function createLink({label, href}: LinkArgs) {
	const link = new VSCodeLink();

	if (label) {
		link.textContent = label;
	}
	if (href) {
		link.setAttribute('href', href);
	}

	return link;
}
