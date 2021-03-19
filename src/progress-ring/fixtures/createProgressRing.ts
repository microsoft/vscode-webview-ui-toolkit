import {VSCodeProgressRing} from '../index';

export type ProgressRingArgs = {
	value: number;
	min: number;
	max: number;
	isPaused: boolean;
};

export function createProgressRing({
	value,
	min,
	max,
	isPaused,
}: ProgressRingArgs) {
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
	if (isPaused) {
		progressRing.setAttribute('paused', isPaused.toString());
	}

	return progressRing;
}
