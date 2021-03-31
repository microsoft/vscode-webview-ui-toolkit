import {ColorTheme, WebviewPanel, window} from 'vscode';

/**
 * Sets up an event listener to listen for VSCode theme changes and notifies
 * the given webview panel when a change has occurred.
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
