# Getting Started Guide

This guide will cover the following steps to get you up and running with the Webview UI Toolkit.

1. Create a webview-based extension
2. Install and set up the toolkit
3. Set up message passing between the extension and webview

_If you get stuck at any point or if you just want a pre-configured starter extension template, install our [completed hello world sample extension](https://github.com/microsoft/vscode-webview-ui-toolkit-samples/tree/main/default/hello-world) based on this guide._

## Part 1: Create a webview-based extension

Before installing the toolkit, you need to create a webview-based extension. The following steps are taken directly from the Visual Studio Code [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension) guide and [Webview API](https://code.visualstudio.com/api/extension-guides/webview) guide.

To generate a basic extension, we can use [Yeoman](https://yeoman.io/) and the [Visual Studio Code Extension Generator](https://www.npmjs.com/package/generator-code). First, though, make sure you have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed. Then, install Yeoman and the generator using the following command:

```bash
npm install -g yo generator-code
```

The generator will scaffold a TypeScript or JavaScript extension ready for development.

Run the generator and fill out a few fields for a new TypeScript + Webpack extension:

```bash
yo code

# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? hello-world
# ? What's the identifier of your extension? hello-world
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Yes
# ? Bundle the source code with webpack? Yes
# ? Which package manager to use? npm

code ./hello-world
```

### Create a webview

With this basic extension created, you now need to create a webview. The following steps are an adapted version of those provided in the [Webview API](https://code.visualstudio.com/api/extension-guides/webview) guide – for more info about webviews read the guide.

Start by navigating to the `extensions.ts` file inside the `src` directory and replacing the contents of the `activate` function with the following:

```typescript
// file: src/extension.ts

export function activate(context: vscode.ExtensionContext) {
  const helloCommand = vscode.commands.registerCommand("hello-world.helloWorld", () => {
    HelloWorldPanel.render();
  });

  context.subscriptions.push(helloCommand);
}
```

At this point, you probably have noticed that there's an error because `HelloWorldPanel` doesn't exist. Here's how to fix that.

### Create a webview panel class

Create a new directory/file at `src/panels/HelloWorldPanel.ts`.

Inside this file, create a class that manages the state and behavior of Hello World webview panels.

It'll contain all the data and methods for:

- Creating and rendering Hello World webview panels
- Properly cleaning up and disposing of webview resources when the panel is closed
- Setting the HTML content of the webview panel
- Setting message listeners so data can be passed between the webview and extension

**Constructor and properties**

Start by importing the Visual Studio Code API and creating an exported `HelloWorldPanel` class with the following properties and constructor method:

```typescript
// file: src/panels/HelloWorldPanel.ts

import * as vscode from "vscode";

export class HelloWorldPanel {
  public static currentPanel: HelloWorldPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private _disposables: vscode.Disposable[] = [];

  private constructor(panel: vscode.WebviewPanel) {
    this._panel = panel;
  }
}
```

**Render method**

Now, add the render method. This will be responsible for rendering the current webview panel – if it exists – or creating and displaying a new webview panel.

```typescript
// file: src/panels/HelloWorldPanel.ts

export class HelloWorldPanel {
  // ... properties and constructor method ...

  public static render() {
    if (HelloWorldPanel.currentPanel) {
      HelloWorldPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
    } else {
      const panel = vscode.window.createWebviewPanel("hello-world", "Hello World", vscode.ViewColumn.One, {
        // Empty for now
      });

      HelloWorldPanel.currentPanel = new HelloWorldPanel(panel);
    }
  }
}
```

At this point, you can also go back to the `src/extension.ts` file and add an import statement to resolve the earlier error.

```typescript
// file: src/extension.ts

import * as vscode from "vscode";
import { HelloWorldPanel } from "./panels/HelloWorldPanel";

// ... activate function ...
```

**Dispose method**

Back in the `HelloWorldPanel` class, you now need to define a `dispose` method so that webview resources are cleaned up when the webview panel is closed by the user or closed programmatically.

```typescript
// file: src/panels/HelloWorldPanel.ts

export class HelloWorldPanel {
  // ... other properties and methods ...

  public dispose() {
    HelloWorldPanel.currentPanel = undefined;

    this._panel.dispose();

    while (this._disposables.length) {
      const disposable = this._disposables.pop();
      if (disposable) {
        disposable.dispose();
      }
    }
  }
}
```

With the `dispose` method defined, you also need to update the constructor method. To do this, add an `onDidDispose` event listener, so the method can be triggered when the webview panel is closed.

```typescript
// file: src/panels/HelloWorldPanel.ts

private constructor(panel: vscode.WebviewPanel) {
    // ... other code ...

    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);
}
```

**Get webview content method**

The `_getWebviewHtml` method is where the UI of the extension will be defined.

This is also where references to CSS and JavaScript files/packages are created and inserted into the webview HTML. You'll configure a reference to the Webview UI Toolkit here, in the second part of this guide.

```typescript
// file: src/panels/HelloWorldPanel.ts

export class HelloWorldPanel {
  // ... other properties and methods ...

  private _getWebviewHtml() {
    // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
    return /*html*/ `
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
}
```

This is another point in which you need to update the constructor method to set the HTML content for the webview panel.

```typescript
// file: src/panels/HelloWorldPanel.ts

private constructor(panel: vscode.WebviewPanel) {
    // ... other code ...

    this._panel.webview.html = this._getWebviewHtml();
}
```

**Set message listener method**

Message passing is handled in the third part of this guide.

### Test that everything works

Congratulations! You officially created a basic webview extension.

Inside the editor, press `F5` to test that everything is working. This will compile and run the extension in a new Extension Development Host window.

When the host window opens, open the Command Palette (`Crtl + Shift + P` or `Cmd + Shift + P` on Mac), type "Hello World", and click `enter` to run the command – which should display the webview panel.

![Testing That The Webview Extension Works](./assets/images/webview-test.gif)

## Part 2: Install and set up the toolkit

With an extension created, install the toolkit package using this command:

```
npm install --save @vscode/webview-ui-toolkit
```

### Register the toolkit components

It can be helpful to think of webviews as having a frontend and a backend.

In the first part of this guide, you created the backend of a webview (i.e. `HelloWorldPanel`) and in this part, you'll create and configure the frontend JavaScript of a webview.

To do this, start by creating a new directory/file at `src/webview/index.ts`. For now, it will contain the code that will register the toolkit web components (in this case a `<vscode-button>`) with the webview sandbox/iframe.

```js
// file: src/webview/index.ts

import { provideVSCodeDesignSystem, vsCodeButton } from "@vscode/webview-ui-toolkit";

provideVSCodeDesignSystem().register(vsCodeButton());
```

**A quick note on registering other components**

To register more toolkit components, simply import the component
registration function and call it from within the register
method, like so:

```js
import { provideVSCodeDesignSystem, vsCodeButton, vsCodeCheckbox } from "@vscode/webview-ui-toolkit";

provideVSCodeDesignSystem().register(vsCodeButton(), vsCodeCheckbox());
```

Finally, if you would like to register all of the toolkit
components at once, there's a handy convenience function:

```js
import { provideVSCodeDesignSystem, allComponents } from "@vscode/webview-ui-toolkit";

provideVSCodeDesignSystem().register(allComponents.register());
```

### Add the button to the webview markup

With those changes, you can now add the `<vscode-button>` to the webview markup like so:

```typescript
// file: src/panels/HelloWorldPanel.ts

private _getWebviewHtml() {
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <vscode-button id="howdy">Howdy!</vscode-button>
      </body>
    </html>
  `;
}
```

### Updating webpack config

At this point, the component registration code has been created, but it has not been configured to run inside the webview.

To do this, you need to first update the extension Webpack configuration so that the `src/webview/index.ts` file is included in the extension build.

Inside `webpack.config.js`, in the root directory, add the following changes:

```js
// file: webpack.config.js

const extensionConfig = {
  // Add a `webview` entry point to the `entry` config
  entry: {
    extension: "./src/extension.ts",
    webview: "./src/webview/index.ts",
  },
  // Update the `output.filename` config to be '[name].js'
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  // ... other extension configs ...
};
```

These configurations will create a build output that contains a `dist/extension.js` file and a `dist/webview.js` file.

### Add a script tag to the webview markup

You can now use some Visual Studio Code APIs to create a URI pointing to the `dist/webview.js` file.

These API calls can get a bit verbose, so create a small helper function to keep your code clean.

Add a new file at `src/utilities/getUri.ts` with the following:

```typescript
// file: src/utilities/getUri.ts

import { Uri, Webview } from "vscode";

export function getUri(webview: Webview, extensionUri: Uri, pathList: string[]) {
  return webview.asWebviewUri(Uri.joinPath(extensionUri, ...pathList));
}
```

You can use that helper function to get a webview URI that points to the `webview.js` file and then add a script tag to the webview markup.

```typescript
// file: src/panels/HelloWorldPanel.ts

import { getUri } from "../utilities/getUri";

// ... other code ...

private _getWebviewHtml() {
  const webviewUri = getUri(webview, extensionUri, ["dist", "webview.js"]);

  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <script type="module" src="${webviewUri}"></script>
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <vscode-button id="howdy">Howdy!</vscode-button>
      </body>
    </html>
  `;
}
```

### Add missing parameters

You might have noticed that there are some errors in the `getUri` function call. To fix this, start by updating the `_getWebviewHtml` method to accept two new parameters.

```typescript
// file: src/panels/HelloWorldPanel.ts

private _getWebviewHtml(webview: vscode.Webview, extensionUri: vscode.Uri) {
  // ... Implementation details should be left unchanged for now ...
}
```

With this change, you also need to update the parameters of a few other methods and method calls.

Update the `constructor` method with the following:

```typescript
// file: src/panels/HelloWorldPanel.ts

private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
  // ... other code ...

  this._panel.webview.html = this._getWebviewHtml(this._panel.webview, extensionUri);
}
```

Update the `render` method with the following:

```typescript
// file: src/panels/HelloWorldPanel.ts

public static render(extensionUri: vscode.Uri) {
  // ... other code ...

  HelloWorldPanel.currentPanel = new HelloWorldPanel(panel, extensionUri);
}
```

Finally, update the call to the `render` method:

```typescript
// file: src/extension.ts

HelloWorldPanel.render(context.extensionUri);
```

### Enable webview scripts and improve security

The final thing you need to do is update the webview panel configuration option you left empty earlier in the `render` method so that JavaScript is enabled in the webview.

```typescript
// file: src/panels/HelloWorldPanel.ts

public static render(extensionUri: vscode.Uri) {
  // ... other code ...

  const panel = vscode.window.createWebviewPanel("helloworld", "Hello World", vscode.ViewColumn.One, {
    // Enable javascript in the webview
    enableScripts: true,
    // Restrict the webview to only load resources from the `dist` directory
    localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'dist')]
  });

  // ... other code ...
}
```

You should also update the content security policy of your webview to only allow scripts that have a specific nonce. To do this, create another utility function at `src/utilities/getNonce.ts`.

```typescript
// file: src/utilities/getNonce.ts

export function getNonce() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
```

Back in `HelloWorldPanel.ts` add the following changes so that only loading scripts with a nonce is allowed (as well as only loading styles from the extension directory, and only loading images from HTTPS or the extension directory).

```typescript
// file: src/panels/HelloWorldPanel.ts

import { getNonce } from "../utilities/getNonce";

// ... other code ...

private _getWebviewHtml(webview: vscode.Webview, extensionUri: vscode.Uri) {
  const webviewUri = getUri(webview, extensionUri, ["dist", "webview.js"]);

  const nonce = getNonce();

  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}';">
        <script type="module" nonce="${nonce}" src="${webviewUri}"></script>
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        <vscode-button id="howdy">Howdy!</vscode-button>
      </body>
    </html>
  `;
}

```

### Make sure everything works

It's time to run a test to see if everything works. Just as before, open the extension in the Extension Development Host window by pressing `F5` and then run the `Hello World` command.

![Testing That The Toolkit Works](./assets/images/toolkit-button-test.gif)

Theming is built right into the components, so you can test that out, too. Open the Command Palette (`Crtl + Shift + P` or `Cmd + Shift + P` on Mac), search for "Preferences: Color Theme," and cycle through all the themes to see the button change.

![Testing That The Toolkit Theme Utilities Work](./assets/images/toolkit-theme-test.gif)

## Part 3: Set up message passing

The final part of this guide will help you adjust the extension once more, so that, when the `<vscode-button>` is clicked, a Visual Studio Code information message is displayed with some text.

### Create the message listener method

Now, you can create the `_setWebviewMessageListener` method in our `HelloWorldPanel` class. It'll be responsible for setting up an event listener that listens for messages passed from the webview context and executes code based on the received message.

```typescript
// file: src/panels/HelloWorldPanel.ts

export class HelloWorldPanel {
  // ... other properties and methods ...

  private _setWebviewMessageListener(webview: vscode.Webview) {
    webview.onDidReceiveMessage(
      (message: any) => {
        const command = message.command;
        const text = message.text;

        switch (command) {
          case "hello":
            vscode.window.showInformationMessage(text);
            return;
        }
      },
      undefined,
      this._disposables
    );
  }
}
```

You also need to call this method in your constructor.

```typescript
// file: src/panels/HelloWorldPanel.ts

private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
  // ... other code ...

  this._setWebviewMessageListener(this._panel.webview);
}
```

### Create message-sending code

Now that the message listener code is created, you need message-sending code.

Back in `src/webview/index.ts` add the following code that will send a message whenever the `<vscode-button>` is clicked.

```typescript
// file: src/webview/index.ts

// ... toolkit registeration code ...

const vscode = acquireVsCodeApi();

window.addEventListener("load", main);

function main() {
  const howdyButton = document.getElementById("howdy");
  howdyButton?.addEventListener("click", handleHowdyClick);
}

function handleHowdyClick() {
  vscode.postMessage({
    command: "hello",
    text: "Hey there partner! 🤠",
  });
}
```

You'll notice a few errors. To fix them, update the `tsconfig.json` file by changing the `lib` compiler option to include `DOM`.

```json
// file: tsconfig.json

{
  "compilerOptions": {
    "lib": ["ES2020", "DOM"]
    // ... other options ...
  }
}
```

Also, install the `@types/vscode-webview` package as a development dependency.

```
npm install --save-dev @types/vscode-webview
```

### One final test

You should test that this all works. To do this, run the extension and click the "Howdy!" button.

![Testing that clicking the howdy button works](./assets/images/toolkit-button-click-test.png)

## Next steps

Congratulations on getting started with the Webview UI Toolkit! 🎊

You can find a [completed hello world extension](https://github.com/microsoft/vscode-webview-ui-toolkit-samples/tree/main/default/hello-world) based on this guide that includes documentation comments explaining the code in even more detail. Also, in the same repository, you can take a look at other sample extensions/templates demonstrating the toolkit in more complex scenarios or with different frontend frameworks/build tools.

One more thing: Check out our component documentation and Visual Studio Code guides on how to work with webviews.

- [Component Docs](./components.md)
- [Storybook (Interactive Component Sandbox)](https://microsoft.github.io/vscode-webview-ui-toolkit/)
- [Toolkit Extension Samples](https://github.com/microsoft/vscode-webview-ui-toolkit-samples)
- [Visual Studio Code Webview Guide](https://code.visualstudio.com/api/extension-guides/webview)
- [Visual Studio Code Webview Guidelines](https://code.visualstudio.com/api/references/extension-guidelines#webviews)
- [Visual Studio Code Extension API Docs](https://code.visualstudio.com/api)
