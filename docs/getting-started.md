# Getting Started Guide

This guide will cover the following steps to get you up and running with the Webview UI Toolkit.

1. Create a webview-based extension
2. Install and set up the toolkit

## Create a webview-based extension

Before installing the toolkit we need to create a webview-based extension to use the toolkit in. The following steps are taken directly from the VS Code [Your First Extension Guide](https://code.visualstudio.com/api/get-started/your-first-extension).

To generate a basic extension we can use [Yeoman](https://yeoman.io/) and the [VS Code Extension Generator](https://www.npmjs.com/package/generator-code). Make sure you have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed first, then install Yeoman and the generator using the following command:

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

### Create a webview

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
      panel = vscode.window.createWebviewPanel("helloworld", "Hello World", vscode.ViewColumn.One, {
        enableScripts: true,
      });

      // Set the HTML content for the new webview panel
      panel.webview.html = getWebviewContent();
    }
  });

  context.subscriptions.push(startCommand);
}
```

At this point you'll probably have noticed that there is an error because `getWebviewContent` is an undefined function, so let's fix that! Scroll to the bottom of the file and include the following:

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

### Test that it all works

Congratulations! You have officially created a basic webview extension.

To test that everything is working, inside the editor, press `F5`. This will compile and run the extension in a new Extension Development Host window.

When the host window opens, open the Command Palette (`Crtl + Shift + P` or `Cmd + Shift + P` on Mac), type "Hello World", and click `enter` to run the command which should display the webview panel.

![Testing That The Webview Extension Works](./assets/webview-test.gif)

## Install and set up the toolkit

With an extension created, we can now install the toolkit via a private Azure NPM package.

Connect to the following Azure Artifacts feed to install the package [here](https://devdiv.visualstudio.com/DevDiv/_packaging?_a=package&feed=vscode-webview-ui-toolkit&package=vscode-webview-ui-toolkit&protocolType=Npm) and create a .npmrc file in the root directory of any extension you create that looks like this:

```
registry=https://devdiv.pkgs.visualstudio.com/DevDiv/_packaging/vscode-webview-ui-toolkit/npm/registry/ 
                        
always-auth=true
```

Install the package using this command.

```
npm install --save vscode-webview-ui-toolkit
```

### Using the toolkit inside a webview

With the package installed, we need to adjust the project so the toolkit is usable within our webview. We'll start by updating the `getWebviewContent` content function we defined earlier to accept two new parameters.

```typescript
function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  // ... Implementation details should be left unchanged for now ...
}

// ❗️ Also update the getWebviewContent function call inside of the activate function. ❗️
export function activate(context: vscode.ExtensionContext) {
  // ... Other code ...

  panel.webview.html = getWebviewContent(panel.webview, context.extensionUri);

  // ... Other code ...
}
```

### Create a toolkit URI

With those changes we can now use some VS Code APIs to create a URI pointing to the toolkit package. These API calls can get a bit verbose however so we'll also create a small helper function to keep our code clean.

```typescript
function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  const toolkitUri = getUri(webview, extensionUri, ["node_modules", "vscode-webview-ui-toolkit", "dist", "toolkit.js"]);

  // ... Other implementation details should be left unchanged for now ...
}

function getUri(webview: vscode.Webview, extensionUri: vscode.Uri, pathList: string[]) {
  return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
}
```

### Pass the URI into the webview

With access to the toolkit URI we can pass it into our webview context via a regular `<script>` tag like so:

```typescript
function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  const toolkitUri = getUri(webview, extensionUri, ["node_modules", "vscode-webview-ui-toolkit", "dist", "toolkit.js"]);

  return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<script type="module" src="${toolkitUri}"></script>
			<title>Hello World!</title>
		</head>
		<body>
			<h1>Hello World!</h1>
		</body>
	</html>
	`;
}
```

### Test that it all works

Let's check that everything works by adding a `<vscode-button>` to the webview and then opening the extension in the Extension Development Host window by pressing `F5`.

```typescript
function getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  const toolkitUri = getUri(webview, extensionUri, ["node_modules", "vscode-webview-ui-toolkit", "dist", "toolkit.js"]);

  return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<script type="module" src="${toolkitUri}"></script>
			<title>Hello World!</title>
		</head>
		<body>
			<h1>Hello World!</h1>
			<vscode-button>Howdy!</vscode-button>
		</body>
	</html>
	`;
}
```

![Testing That The Toolkit Works](./assets/toolkit-button-test.gif)

Finally, component theming is built right into the components so feel free to test that out too!

Open the Command Pallette (`Crtl + Shift + P` or `Cmd + Shift + P` on Mac), search for "Preferences: Color Theme", and cycle through all the themes to see the components change!

![Testing That The Toolkit Theme Utilities Work](./assets/toolkit-theme-test.gif)

## Next steps

Congratulations on getting started with the Webview UI Toolkit! 🎊

Now that you're set up, checkout the component docs for further documentation on what components are available and how to use them. Further component documentation and some guides on how to work with webviews is also provided too. Happy hacking!

- [Component Docs](./components.md)
- [Storybook – Interactive Component Sandbox](https://microsoft.github.io/vscode-webview-ui-toolkit/)
- [Toolkit Extension Samples](https://github.com/microsoft/vscode-webview-ui-toolkit-samples)
- [VS Code Webview Guide](https://code.visualstudio.com/api/extension-guides/webview)
- [VS Code Webview Guidelines](https://code.visualstudio.com/api/references/extension-guidelines#webviews)
- [VS Code Extension API Docs](https://code.visualstudio.com/api)
