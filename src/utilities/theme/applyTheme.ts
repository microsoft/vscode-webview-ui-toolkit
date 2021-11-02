// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This script configures a MutationObserver to watch for Visual Studio Code theme changes and
 * applies the current Visual Studio Code theme to the toolkit components.
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
 * Applies the current Visual Studio Code theme to the toolkit components.
 */
function applyCurrentTheme() {
	// Get all the styles applied to the <body> tag in the webview HTML
	// Importantly this includes all the CSS variables associated with the
	// current Visual Studio Code theme
	const styles = getComputedStyle(document.body);

	for (const vscodeTokenName in tokenMappings) {
		const toolkitTokenName = tokenMappings[vscodeTokenName];
		const body = document.querySelector('body');
		let value = styles.getPropertyValue(vscodeTokenName).toString();

		// When the VS Code high contrast theme is set, button background color CSS variables
		// do not exist and will default to the toolkit design token default color values (i.e.
		// VS Code dark theme).
		//
		// This is incorrect theme behavior, so instead, we manually set these color values to
		// be transparent.
		if (vscodeTokenName.includes('button') && value.length <= 0) {
			value = 'transparent';
		}

		if (body) {
			toolkitTokenName.setValueFor(body, value);
		}
	}
}
