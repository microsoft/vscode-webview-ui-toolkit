import {WebviewPanel, window} from 'vscode';

/**
 * Sets up an event listener to listen for VS Code theme changes and notifies
 * the given webview panel when a change has occurred.
 *
 * @remarks This utility function should be used in tandem with the
 * `applyTheme` utility function to correctly set up VS Code theme
 * change handling in the VS Code Webview Toolkit.
 *
 * @param panel - The current VS Code webview panel
 */
export function setThemeEventListener(panel: WebviewPanel) {
  window.onDidChangeActiveColorTheme((e) => {
    if (panel) {
      panel.webview.postMessage({ didThemeChange: true });
    }
  });
}