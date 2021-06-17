// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {VSCodeProgressBar} from '../index';

export type ProgressBarArgs = {
	value: number;
	min: number;
	max: number;
};

export function createProgressBar({value, min, max}: ProgressBarArgs) {
	const progressBar = new VSCodeProgressBar();

	if (value) {
		progressBar.setAttribute('value', value.toString());
	}
	if (min) {
		progressBar.setAttribute('min', min.toString());
	}
	if (max) {
		progressBar.setAttribute('max', max.toString());
	}

	return progressBar;
}
