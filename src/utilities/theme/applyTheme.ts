// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {CSSDesignToken} from '@microsoft/fast-foundation';
import type {T} from '../design-tokens/create';

/**
 * Configures a MutationObserver to watch for Visual Studio Code theme changes and
 * applies the current Visual Studio Code theme to the toolkit components.
 */
export function initThemeChangeListener(tokenMappings: {
	[index: string]: CSSDesignToken<T>;
}) {
	window.addEventListener('load', () => {
		const observer = new MutationObserver(() => {
			applyCurrentTheme(tokenMappings);
		});
		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ['class'],
		});

		applyCurrentTheme(tokenMappings);
	});
}

/**
 * Applies the current Visual Studio Code theme to the toolkit components.
 */
function applyCurrentTheme(tokenMappings: {
	[index: string]: CSSDesignToken<T>;
}) {
	// Get all the styles applied to the <body> tag in the webview HTML
	// Importantly this includes all the CSS variables associated with the
	// current Visual Studio Code theme
	const styles = getComputedStyle(document.body);

	for (const vscodeTokenName in tokenMappings) {
		const toolkitTokenName = tokenMappings[vscodeTokenName];
		const body = document.querySelector('body');
		const value = styles.getPropertyValue(vscodeTokenName).toString();

		if (body) {
			toolkitTokenName.setValueFor(body, value);
		}
	}
}
