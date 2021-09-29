# Getting Started Guide

This guide will cover the following steps to get you up and running with the Webview UI Toolkit.

1. Create a webview-based extension
2. Install and set up the toolkit
3. Set up message passing between the extension and webview

_If you get stuck at any point, a completed sample extension based on this guide can be found [here](https://github.com/microsoft/vscode-webview-ui-toolkit-samples/tree/main/hello-world)._

## Part 1: Create a webview-based extension

Before installing the toolkit we need to create a webview-based extension to use the toolkit in. The following steps are taken directly from the Visual Studio Code [Your First Extension Guide](https://code.visualstudio.com/api/get-started/your-first-extension) and [Webview API Guide](https://code.visualstudio.com/api/extension-guides/webview).

To generate a basic extension we can use [Yeoman](https://yeoman.io/) and the [Visual Studio Code Extension Generator](https://www.npmjs.com/package/generator-code). Make sure you have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed first, then install Yeoman and the generator using the following command:

```bash
npm install -g yo generator-code
```

The generator will scaffold a TypeScript or JavaScript project ready for development.

Run the generator and fill out a few fields for a TypeScript project:

```bash
yo code

# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? helloworld
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
  // Create the helloworld command
  const helloCommand = vscode.commands.registerCommand("helloworld.helloWorld", () => {
    HelloWorldPanel.render();
  });

  // Add command to the extension context
  context.subscriptions.push(helloCommand);
}
```

At this point you'll probably have noticed that there is an error because `HelloWorldPanel` does not exist, so let's fix that!

### Create a webview panel class

Create a new directory/file at `src/panels/HelloWorldPanel.ts`.

Inside this file we're going to create a class that manages the state and behavior of Hello World webview panels.

It will contain all the data and methods for:

- Creating and rendering Hello World webview panels
- Properly cleaning up and disposing of webview resources when the panel is closed
- Setting the HTML content of the webview panel
- Setting message listeners so data can be passed between the webview and extension

**Constructor and properties**

Start by importing the Visual Studio Code API and creating an exported `HelloWorldPanel` class with the following properties and constructor method:

```typescript
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

We can now add the render method which will be responsible for rendering the current webview panel if it exists or creating and a displaying a new webview panel if it does not.

```typescript
export class HelloWorldPanel {
  // ... properties and constructor method ...

  /**
   * Renders the current webview panel if it exists otherwise a new webview panel
   * will be created and displayed.
   */
  public static render() {
    if (HelloWorldPanel.currentPanel) {
      // If the webview panel already exists reveal it
      HelloWorldPanel.currentPanel._panel.reveal(vscode.ViewColumn.One);
    } else {
      // If a webview panel does not already exist create and show a new one
      const panel = vscode.window.createWebviewPanel(
        // Panel view type
        "helloworld",
        // Panel title
        "Hello World",
        // The editor column the panel should be displayed in
        vscode.ViewColumn.One,
        // Extra panel configurations
        {
          // Empty for now
        }
      );

      HelloWorldPanel.currentPanel = new HelloWorldPanel(panel);
    }
  }
}
```

At this point we can also go back to the `src/extension.ts` file and add an import statement to resolve the error from earlier.

```typescript
import * as vscode from "vscode";
import { HelloWorldPanel } from "./panels/HelloWorldPanel";

// ... activate function ...
```

**Dispose method**

Back in the `HelloWorldPanel` class we now need to define a `dispose` method so that webview resources are cleaned up when a the webview panel is closed by the user or closed programmatically.

```typescript
export class HelloWorldPanel {
  // ... other properties and methods ...

  /**
   * Cleans up and disposes of webview resources when the webview panel is closed.
   */
  public dispose() {
    HelloWorldPanel.currentPanel = undefined;

    // Dispose of the current webview panel
    this._panel.dispose();

    // Dispose of all disposables (i.e. commands) for the current webview panel
    while (this._disposables.length) {
      const disposable = this._disposables.pop();
      if (disposable) {
        disposable.dispose();
      }
    }
  }
}
```

With the `dispose` method defined we also need to update the constructor method by adding an `onDidDispose` event listener so the method can be triggered when the webview panel is closed.

```typescript
private constructor(panel: vscode.WebviewPanel) {
    // ... other code ...

    // Set an event listener to listen for when the panel is disposed (i.e. when the user closes
    // the panel or when the panel is closed programmatically)
    this._panel.onDidDispose(this.dispose, null, this._disposables);
}
```

**Get webview content method**

The `_getWebviewContent` method is where the UI of the extension will be defined.

This is also the place where references to CSS and JavaScript files/packages are created and inserted into the webview HTML. We will configure the Webview UI Toolkit here, in the second part of this guide.

```typescript
export class HelloWorldPanel {
  // ... other properties and methods ...

  /**
   * Defines and returns the HTML that should be rendered within the webview panel.
   *
   * @returns A template string literal containing the HTML that should be
   * rendered within the webview panel
   */
  private _getWebviewContent() {
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

This is another point where we need to update our constructor method to set the HTML content for the webview panel.

```typescript
private constructor(panel: vscode.WebviewPanel) {
    // ... other code ...

    // Set the HTML content for the webview panel
    this._panel.webview.html = this._getWebviewContent();
}
```

**Set message listener method**

We'll handle this in the the third part of this guide.

### Test that it all works

Congratulations! You have officially created a basic webview extension.

To test that everything is working, inside the editor, press `F5`. This will compile and run the extension in a new Extension Development Host window.

When the host window opens, open the Command Palette (`Crtl + Shift + P` or `Cmd + Shift + P` on Mac), type "Hello World", and click `enter` to run the command which should display the webview panel.

![Testing That The Webview Extension Works](./assets/webview-test.gif)

## Part 2: Install and set up the toolkit

With an extension created, we can now install the toolkit package using this command.

```
npm install --save @microsoft/vscode-webview-ui-toolkit
```

### Using the toolkit inside a webview

With the package installed, we need to adjust the project so the toolkit is usable within our webview. We'll start by updating the `_getWebviewContent` method we defined earlier to accept two new parameters.

```typescript
/**
 * Defines and returns the HTML that should be rendered within the webview panel.
 *
 * @param webview A reference to the extension webview
 * @param extensionUri The URI of the directory containing the extension
 * @returns A template string literal containing the HTML that should be
 * rendered within the webview panel
 */
private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  // ... Implementation details should be left unchanged for now ...
}
```

With this change we all need to update the parameters of a few other methods and method calls.

Update the `constructor` method with the following:

```typescript
private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
  // ... other code ...

  // Set the HTML content for the webview panel
  this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);
}
```

Update the `render` method with the following:

```typescript
/**
  * Renders the current webview panel if it exists otherwise a new webview panel
  * will be created and displayed.
  *
  * @param extensionUri The URI of the directory containing the extension.
  */
public static render(extensionUri: vscode.Uri) {
  // ... other code ...

  HelloWorldPanel.currentPanel = new HelloWorldPanel(panel, extensionUri);
}
```

Finally in `src/extension.ts` update the call to the `render` method:

```typescript
HelloWorldPanel.render(context.extensionUri);
```

### Create a webview uri

With those changes we can now use some Visual Studio Code APIs to create a URI pointing to the toolkit package. These API calls can get a bit verbose however so we'll also create a small helper function to keep our code clean.

Create a new file at `src/utilities/getUri.ts` with the following:

```typescript
import { Uri, Webview } from "vscode";

/**
 * A helper function which will get the webview URI of a given file or resource.
 *
 * @remarks This URI can be used within a webview's HTML as a link to the
 * given file/resource.
 *
 * @param webview A reference to the extension webview
 * @param extensionUri The URI of the directory containing the extension
 * @param pathList An array of strings representing the path to a file/resource
 * @returns A URI pointing to the file/resource
 */
export function getUri(webview: Webview, extensionUri: Uri, pathList: string[]) {
  return webview.asWebviewUri(Uri.joinPath(extensionUri, ...pathList));
}
```

We can use that helper function to get a webview URI pointing to the toolkit package.

```typescript
import { getUri } from "../utilities/getUri";

// ... other code ...

private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  const toolkitUri = getUri(webview, extensionUri, [
    "node_modules",
    "@microsoft",
    "vscode-webview-ui-toolkit",
    "dist",
    "toolkit.js",
  ]);

  // ... other code ...
}
```

### Pass the uri into the webview

With access to the toolkit URI we can pass it into our webview context with a regular `<script>` tag like so:

```typescript
private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  // ... toolkit uri ...

  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
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

### Update webview configurations

Before we can test these updates, the final thing we need to do is update the webview panel configuration option we left empty earlier in the `render` method so that JavaScript is enabled in the webview.

```typescript
public static render(extensionUri: vscode.Uri) {
  // ... other code ...

  const panel = vscode.window.createWebviewPanel(
    "helloworld",
    "Hello World",
    vscode.ViewColumn.One,
    {
      // Enable JavaScript in the webview
      enableScripts: true,
    }
  );

  // ... other code ...
}
```

### Test that it all works

Let's check that everything works by adding a `<vscode-button>` to the webview and then opening the extension in the Extension Development Host window by pressing `F5`.

```typescript
private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  // ... other code ...

  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <script type="module" src="${toolkitUri}"></script>
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

![Testing That The Toolkit Works](./assets/toolkit-button-test.gif)

Theming is built right into the components so feel free to test that out too!

Open the Command Pallette (`Crtl + Shift + P` or `Cmd + Shift + P` on Mac), search for "Preferences: Color Theme", and cycle through all the themes to see the components change!

![Testing That The Toolkit Theme Utilities Work](./assets/toolkit-theme-test.gif)

## Part 3: Set up message passing

In the final part of this guide we will adjust the extension once more so that when the `<vscode-button>` is clicked a Visual Studio Code information message is displayed with some text.

### Create message listener method

We can now finally create the `_setWebviewMessageListener` method in our `HelloWorldPanel` class. It will be responsible for setting up an event listener that listens for messages passed from the webview context and executes code based on the message that is recieved.

```typescript
export class HelloWorldPanel {
  // ... other properties and methods ...

  /**
   * Sets up an event listener to listen for messages passed from the webview context and
   * executes code based on the message that is recieved.
   *
   * @param webview A reference to the extension webview
   * @param context A reference to the extension context
   */
  private _setWebviewMessageListener(webview: vscode.Webview) {
    webview.onDidReceiveMessage(
      (message: any) => {
        const command = message.command;
        const text = message.text;

        switch (command) {
          case "hello":
            // Code that should run in response to the hello message command
            vscode.window.showInformationMessage(text);
            return;
          // Add more switch case statements here as more webview message commands
          // are created within the webview context (i.e. inside media/main.js)
        }
      },
      undefined,
      this._disposables
    );
  }
}
```

We also need to call this method in our constructor.

```typescript
private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
  // ... other code ...

  // Set an event listener to listen for messages passed from the webview context
  this._setWebviewMessageListener(this._panel.webview);
}
```

### Create message sending code

With the message listener code created, we need some message sending code.

This will come in the form of a `main.js` file that will send a message whenever the `vscode-button` is clicked.

Create a new file at `media/main.js`.

```javascript
// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

// Main function that gets executed once the webview DOM loads
function main() {
  const howdyButton = document.getElementById("howdy");
  howdyButton.addEventListener("click", handleHowdyClick);
}

// Callback function that is executed when the howdy button is clicked
function handleHowdyClick() {
  vscode.postMessage({
    command: "hello",
    text: "Hey there partner! 🤠",
  });
}
```

In order for this `main.js` file to run in the first place, the last thing to do is to create and pass a URI into the webview HTML just like we did for the toolkit package.

```typescript
private _getWebviewContent(webview: vscode.Webview, extensionUri: vscode.Uri) {
  // ... other code ...

  const mainUri = getUri(webview, extensionUri, ["media","main.js"]);

  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <script type="module" src="${toolkitUri}"></script>
        <script type="module" src="${mainUri}"></script>
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

### One final test

Per usual, let's test that this all works by running the extension and clicking the on the Howdy button.

![Testing that the clicking the howdy button works](./assets/toolkit-button-click-test.png)

## Next steps

Congratulations on getting started with the Webview UI Toolkit! 🎊

Now that you're set up, checkout the component docs for further documentation on what components are available and how to use them. Further component documentation and some guides on how to work with webviews is also provided too. Happy hacking!

- [Component Docs](./components.md)
- [Storybook – Interactive Component Sandbox](https://microsoft.github.io/vscode-webview-ui-toolkit/)
- [Toolkit Extension Samples](https://github.com/microsoft/vscode-webview-ui-toolkit-samples)
- [Visual Studio Code Webview Guide](https://code.visualstudio.com/api/extension-guides/webview)
- [Visual Studio Code Webview Guidelines](https://code.visualstudio.com/api/references/extension-guidelines#webviews)
- [Visual Studio Code Extension API Docs](https://code.visualstudio.com/api)
