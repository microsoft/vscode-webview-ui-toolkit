// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This script configures a MutationObserver to watch for VS Code theme changes and
 * applies the current VS Code theme to the toolkit components.
 */

import {tokenMappings} from './tokenMappings';

window.addEventListener('load', () => {
	const observer = new MutationObserver(applyCurrentTheme);
	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ['class'],
	});

	applyCurrentTheme();
});

/**
 * Applies the current VS Code theme to the toolkit components.
 */
function applyCurrentTheme() {
	// Get all the styles applied to the <body> tag in the webview HTML
	// Importantly this includes all the CSS variables associated with the
	// current VS Code theme
	const styles = getComputedStyle(document.body);

	for (const vscodeTokenName in tokenMappings) {
		const toolkitTokenName = tokenMappings[vscodeTokenName];
		const body = document.querySelector('body');
		const value = styles.getPropertyValue(vscodeTokenName).toString();

		if (body && value.length > 0) {
			toolkitTokenName.setValueFor(body, value);
		}
	}
}
