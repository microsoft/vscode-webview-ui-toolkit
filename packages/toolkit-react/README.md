# React Webview UI Toolkit for Visual Studio Code

[![NPM Version](https://img.shields.io/npm/v/@vscode/webview-ui-toolkit?color=blue)](https://www.npmjs.com/package/@vscode/webview-ui-toolkit)
[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)](./LICENSE)
![Toolkit CI Status](https://github.com/microsoft/vscode-webview-ui-toolkit/actions/workflows/ci.yml/badge.svg)

A React component library for building [webview-based extensions](https://code.visualstudio.com/api/extension-guides/webview) in Visual Studio Code.

This is a companion package to the core web components provided in the [Webview UI Toolkit for Visual Studio Code](https://github.com/microsoft/vscode-webview-ui-toolkit/tree/vnext/packages/toolkit). In fact, these components are built with the same exact web components mentioned above, but are simply wrapped in a React component using the [`@microsoft/fast-react-wrapper`](https://www.npmjs.com/package/@microsoft/fast-react-wrapper) package.

## Usage

To use the React components in your extension, install the package with the following command:

```
npm install --save @vscode/webview-ui-toolkit-react
```

To import the components use the following syntax:

```ts
import { VSCodeButton, VSCodeCheckbox } from "@vscode/webview-ui-toolkit-react";
```

You should be able to (for the most part) follow the same usage patterns and attributes as the web components. See our [component documentation](https://github.com/microsoft/vscode-webview-ui-toolkit/blob/vnext/docs/components.md) for more details.

Also see our [React + Vite sample extension](https://github.com/microsoft/vscode-webview-ui-toolkit-samples/tree/main/frameworks/hello-world-react-vite) for further help scaffolding a new webview-based extension.

## Documentation

For more information, check out the following documentation:

- [Toolkit Extension Samples](https://github.com/microsoft/vscode-webview-ui-toolkit-samples)
- [Webview API Guide](https://code.visualstudio.com/api/extension-guides/webview)
- [Webview API Guidelines](https://code.visualstudio.com/api/references/extension-guidelines#webviews)
- [Webview UX Guidelines](https://code.visualstudio.com/api/ux-guidelines/webviews)
- [Extension API Docs](https://code.visualstudio.com/api)
- [Figma Toolkit](https://www.figma.com/community/file/1071566662997054792/Webview-UI-Toolkit-for-Visual-Studio-Code)

## Some exceptions

There are still some exceptions to the general usage patterns when using the React components. These are listed below and will be updated as needed.

### Use `onInput` instead of `onChange` to handle keystrokes

Due to the fact that the toolkit React components are built with web components under the hood, it means that input components like `VSCodeTextField` or `VSCodeTextArea` follow the native browser `change` and `input` event model. This means the `onChange` event is fired when focus is blurred away from the input element and `onInput` is fired on every keystroke. This exception is the result of the React team deciding to [override native browser behavior](https://reactjs.org/docs/dom-elements.html#onchange).

As an example, if you would like to update the value of a text field on every keystroke, the `onInput` should be used instead of `onChange`.

```tsx
import { VSCodeTextField } from "@vscode/webview-ui-toolkit/react";

function SomeComponent() {
  const [value, setValue] = useState("");

  return <VSCodeTextField value={value} onInput={e => setValue(e.target.value)} />;
}
```
