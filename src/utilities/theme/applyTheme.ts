/**
 * This script applies the current VSCode theme to the VSCode Webview Toolkit
 * components.
 *
 * Note: This utility function should be used in tandem with the
 * setThemeEventListener utility function to correctly set up
 * VSCode theme change handling in the VSCode Webview Toolkit.
 */

import {colorTokensToAttributeNames} from './tokensToAttributes';

window.addEventListener('load', () => {
	const designProvider = document.querySelector(
		'vscode-design-system-provider'
	);
	if (designProvider) {
		const observer = new MutationObserver(() => {
			applyCurrentTheme(designProvider);
		});
		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ['class'],
		});

		applyCurrentTheme(designProvider);
	}
});

/**
 * Applies the current VSCode theme to the VSCode Webview Toolkit
 * components.
 *
 * @param designProvider A reference to the `<vscode-design-system-provider>` element
 */
function applyCurrentTheme(designProvider: Element) {
	// Get all the styles applied to the <body> tag in the webview HTML
	// Importantly this includes all the CSS variables associated with the
	// current VSCode theme
	const styles = getComputedStyle(document.body);

	for (const colorToken in colorTokensToAttributeNames) {
		const attributeName = colorTokensToAttributeNames[colorToken];
		const tokenValue = styles.getPropertyValue(colorToken).toString();
		// Set a given VSCode theme color to its respective <vscode-design-system-provider> attribute
		designProvider.setAttribute(attributeName, tokenValue);
	}
}
