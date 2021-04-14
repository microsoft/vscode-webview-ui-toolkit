# Getting Started Guide

This guide will cover the following steps to get you up and running with the VS Code Webview Toolkit.

1. Create a webview-based extension.
2. Install the toolkit.
3. Set up the VS Code theming utilities.
4. Use the toolkit.

## Create A Webview-Based Extension

Before installing the toolkit we need to create an webview-based extension to use the toolkit in. The following steps are taken directly from the VS Code Extension [Your First Extension Guide](https://code.visualstudio.com/api/get-started/your-first-extension).

To generate a basic extension we can use [Yeoman](https://yeoman.io/) and the [VS Code Extension Generator](https://www.npmjs.com/package/generator-code). Make sure you have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed first, then you can install Yeoman and the generator using the following command:

```bash
npm install -g yo generator-code
```

The generator scaffolds a TypeScript or JavaScript project ready for development. Run the generator and fill out a few fields for a TypeScript project:

```bash
yo code

# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? helloworld
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension? helloworld
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Yes
# ? Bundle the source code with webpack? No
# ? Which package manager to use? npm

code ./helloworld
```

### Setting Up A Webview

With this basic extension created, we now need to create a webview. The following steps are an adapted version of the steps provided in the [Webview API Guide](https://code.visualstudio.com/api/extension-guides/webview)––for more information about Webviews visit the guide.

Start by navigating to the `extensions.ts` file inside the `src` directory and replacing the contents of the `activate` function with the following:

```typescript
export function activate(context: vscode.ExtensionContext) {
	let panel: vscode.WebviewPanel | undefined;

	const startCommand = vscode.commands.registerCommand("helloworld.helloWorld", () => {
		if (panel) {
			// If the webview panel already exists reveal it
			panel.reveal(vscode.ViewColumn.One);
		} else {
			// If a webview panel does not already exist create and show a new one
			panel = vscode.window.createWebviewPanel("helloworld", "Hello World", vscode.ViewColumn.One);

			// Set the HTML content for the new webview panel
			panel.webview.html = getWebviewContent();
		}
	});

	context.subscriptions.push(startCommand);
}
```

At this point you'll probably have noticed that there is error because `getWebviewContent` is an undefined function, so let's fix that by defining it! Scroll the bottom of the file and include the following:

```typescript
function getWebviewContent() {
	return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hello World!</title>
            </head>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
	`;
}
```

Congratulations! You have officially created a basic webview extension. 🎊

To test that everything is working, inside the editor, press `F5`. This will compile and run the extension in a new Extension Development Host window.

When the host window opens open the Command Palette (`Shift + Cmd + P`), type in "Hello World", and click `enter` to run the command which should display the webview panel.

![Testing That The Webview Extension Works](./assets/testing-webview-extension.gif)

## Install The Toolkit

With an extension created, we can now install the toolkit with the following command.

```bash
npm install --save @microsoft/vscode-webview-toolkit
```
