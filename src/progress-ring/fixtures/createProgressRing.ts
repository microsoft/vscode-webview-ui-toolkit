// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeProgressRing} from '../index';

export type ProgressRingArgs = {
	value: number;
	min: number;
	max: number;
};

export function createProgressRing({value, min, max}: ProgressRingArgs) {
	const progressRing = new VSCodeProgressRing();

	if (value) {
		progressRing.setAttribute('value', value.toString());
	}
	if (min) {
		progressRing.setAttribute('min', min.toString());
	}
	if (max) {
		progressRing.setAttribute('max', max.toString());
	}

	return progressRing;
}
