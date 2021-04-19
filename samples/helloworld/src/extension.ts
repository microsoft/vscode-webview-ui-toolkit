/**
 * This sample project goes a bit further than the Getting Started Guide on keeping code
 * structure tidy by only importing exactly what we need from the vscode package
 * and moving the getWebviewContent function into a new ui directory.
 */
import { commands, ExtensionContext, WebviewPanel, window, ViewColumn } from "vscode";
import { getWebviewContent } from "./ui/getWebviewContent";
import { setThemeEventListener } from "./utilities/setThemeEventListener";

export function activate(context: ExtensionContext) {
  let panel: WebviewPanel | undefined;

  const startCommand = commands.registerCommand("helloworld.helloWorld", () => {
    if (panel) {
      // If the webview panel already exists reveal it
      panel.reveal(ViewColumn.One);
    } else {
      // If a webview panel does not already exist create and show a new one
      panel = window.createWebviewPanel("helloworld", "Hello World", ViewColumn.One, {
        enableScripts: true,
      });

      // Set the HTML content for the new webview panel
      panel.webview.html = getWebviewContent(panel.webview, context.extensionUri);

      // Sets up an event listener to listen for VS Code theme changes and notifies the
      // webview panel (and therefore the applyTheme utility) when a change has occurred
      setThemeEventListener(panel);

      // Sets up an event listener to listen for messages passed from the webview context
      // and executes code based on the message that is recieved
      setWebviewMessageListener(panel, context);
    }
  });

  context.subscriptions.push(startCommand);
}

export function deactivate() {}

/**
 * Sets up an event listener to listen for messages passed from the webview context and 
 * executes code based on the message that is recieved.
 * 
 * @param panel - The current VS Code webview panel
 * @param context - The VS Code extension context
 */
function setWebviewMessageListener(panel: WebviewPanel, context: ExtensionContext) {
  panel.webview.onDidReceiveMessage(
    (message: any) => {
      const command = message.command;
      const text = message.text;

      switch (command) {
        case "hello":
					// Code that should run in response to the hello command
          window.showInformationMessage(text);
          return;
				// Add more switch cases here as more webview message commands
				// are created within the webview context (i.e. inside main.js)
      }
    },
    undefined,
    context.subscriptions
  );
}
