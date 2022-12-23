// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {CSSDesignToken} from '@microsoft/fast-foundation';
import type {T} from '../design-tokens/create.js';

/**
 * Configures a MutationObserver to watch for Visual Studio Code theme changes and
 * applies the current Visual Studio Code theme to the toolkit components.
 */
export function initThemeChangeListener(
	tokenMappings: Map<string, CSSDesignToken<T>>
) {
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
function applyCurrentTheme(tokenMappings: Map<string, CSSDesignToken<T>>) {
	// Get all the styles applied to the <body> tag in the webview HTML
	// Importantly this includes all the CSS variables associated with the
	// current Visual Studio Code theme
	const styles = getComputedStyle(document.body);
	const body = document.querySelector('body');

	if (body) {
		const themeKind = body.getAttribute('data-vscode-theme-kind');
		for (const [vscodeTokenName, toolkitToken] of tokenMappings) {
			let value = styles.getPropertyValue(vscodeTokenName).toString();

			// Handle a couple of styling edge cases when a high contrast theme is applied
			if (themeKind === 'vscode-high-contrast') {
				// Developer note:
				//
				// There are a handful of VS Code theme tokens that have no value when a high
				// contrast theme is applied.
				//
				// This is an issue because when no value is set the toolkit tokens will fall
				// back to their default color values (aka the VS Code dark theme color palette).
				// This results in the backgrounds of a couple of components having default dark
				// theme colors––thus breaking the high contrast theme.
				//
				// The below code, catches these tokens which have no value and are also background
				// tokens, then overrides their value to be transparent.
				if (
					value.length === 0 &&
					toolkitToken.name.includes('background')
				) {
					value = 'transparent';
				}

				// Set icon button hover to be transparent in high contrast themes
				if (toolkitToken.name === 'button-icon-hover-background') {
					value = 'transparent';
				}
			} else if (themeKind === 'vscode-high-contrast-light') {
				if (
					value.length === 0 &&
					toolkitToken.name.includes('background')
				) {
					// Set button variant hover backgrounds to correct values based on VS Code core source:
					// https://github.com/microsoft/vscode/blob/fd0ee4f77e354de10ae591c9e97fe5ad41b398fc/src/vs/platform/theme/common/colorRegistry.ts#L270-L276
					switch (toolkitToken.name) {
						case 'button-primary-hover-background':
							value = '#0F4A85';
							break;
						case 'button-secondary-hover-background':
							value = 'transparent';
							break;
						case 'button-icon-hover-background':
							value = 'transparent';
							break;
					}
				}
			} else {
				// Set contrast-active-border token to be transparent in non-high-contrast themes
				if (toolkitToken.name === 'contrast-active-border') {
					value = 'transparent';
				}
			}

			toolkitToken.setValueFor(body, value);
		}
	}
}
