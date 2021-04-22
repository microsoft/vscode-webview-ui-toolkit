/**
 * This script configures a MutationObserver to watch for VS Code theme changes and
 * applies the current VS Code theme to the VS Code Webview Toolkit components.
 */

import {colorTokensToAttributeNames} from './tokensToAttributes';

window.addEventListener('load', () => {
	const observer = new MutationObserver(applyCurrentTheme);
	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ['class'],
	});

	applyCurrentTheme();
});

/**
 * Applies the current VS Code theme to the VS Code Webview Toolkit
 * components.
 */
function applyCurrentTheme() {
	const designProvider = document.querySelector(
		'vscode-design-system-provider'
	);

	if (designProvider) {
		// Get all the styles applied to the <body> tag in the webview HTML
		// Importantly this includes all the CSS variables associated with the
		// current VS Code theme
		const styles = getComputedStyle(document.body);

		for (const colorToken in colorTokensToAttributeNames) {
			const attributeName = colorTokensToAttributeNames[colorToken];
			const tokenValue = styles.getPropertyValue(colorToken).toString();
			// Set a given VS Code theme color to its respective
			// <vscode-design-system-provider> attribute
			designProvider.setAttribute(attributeName, tokenValue);
		}
	}
}
