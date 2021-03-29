import {VSCodeProgressBar} from '../index';

export type ProgressBarArgs = {
	value: number;
	min: number;
	max: number;
	isPaused: boolean;
};

export function createProgressBar({
	value,
	min,
	max,
	isPaused,
}: ProgressBarArgs) {
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
	if (isPaused) {
		progressBar.setAttribute('paused', '');
	}

	return progressBar;
}
