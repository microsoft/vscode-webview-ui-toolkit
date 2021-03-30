import {ColorTheme, WebviewPanel, window} from 'vscode';

/**
 * Sets up an event listener to listen for VSCode theme changes. When a
 * theme change occurs a message is sent to the current webview panel
 * indicating that change.
 *
 * Note: This utility function should be used in tandem with the
 * `applyCurrentTheme` utility function to correctly set up VSCode theme
 * change handling in the VSCode Webview Toolkit.
 *
 * @param panel The current VSCode webview panel
 */
export function setThemeEventListener(panel: WebviewPanel) {
	window.onDidChangeActiveColorTheme((e: ColorTheme) => {
		if (panel) {
			panel.webview.postMessage({didThemeChange: true});
		}
	});
}
