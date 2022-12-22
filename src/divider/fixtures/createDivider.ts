// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {Divider} from '../index';

export type DividerArgs = {
	role: string;
};

export function createDivider({role}: DividerArgs) {
	const divider = new Divider();

	if (role && role.toLocaleLowerCase() === 'presentation') {
		divider.setAttribute('role', role.toLocaleLowerCase());
	}

	return divider;
}
