import {VSCodeBadge} from '../index';

export type BadgeArgs = {
	label: string;
	fill: string;
	textColor: string;
	isCircular: boolean;
};

export function createBadge({label, fill, textColor, isCircular}: BadgeArgs) {
	const badge = new VSCodeBadge();
	const root = document.documentElement;

	badge.textContent = label;
	if (fill) {
		// This CSS custom property can be named anything as long
		// as it's prepended with --badge-fill
		// Reference: https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/badge/badge.spec.md
		root.style.setProperty('--badge-fill-foo', fill);
		badge.setAttribute('fill', 'foo');
	}
	if (textColor) {
		// This CSS custom property can be named anything as long
		// as it's prepended with --badge-color
		// Reference: https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/badge/badge.spec.md
		root.style.setProperty('--badge-color-bar', textColor);
		badge.setAttribute('color', 'bar');
	}
	if (isCircular) {
		badge.setAttribute('circular', '');
	}

	return badge;
}
