// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import '../../../node_modules/@vscode/codicons/dist/codicon.css';
import {default as iconMapping} from '../../../node_modules/@vscode/codicons/src/template/mapping.json';

type createCodiconParams = {
	iconName?: string;
	slotName?: string;
	random?: boolean;
};

/**
 * Creates and returns a span element that renders a VS Code Codicon icon.
 * @param iconName (optional) The name of the Codicon icon that should be created
 * @param slotName (optional) The name of the slot that the icon will be inserted into
 * @param random (optional) If true, a random Codicon icon will be returned
 *
 * @internal
 */
export function createCodiconIcon({
	iconName,
	slotName,
	random,
}: createCodiconParams): HTMLElement {
	const icon = document.createElement('span');
	if (slotName) {
		icon.setAttribute('slot', slotName);
	}
	icon.classList.add('codicon');
	if (random) {
		const iconList = Object.keys(iconMapping);
		const randomIconName =
			iconList[Math.floor(Math.random() * iconList.length)];
		icon.classList.add(`codicon-${randomIconName}`);
	} else {
		icon.classList.add(`codicon-${iconName}`);
	}
	return icon;
}
