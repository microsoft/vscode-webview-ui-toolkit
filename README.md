# Webview UI Toolkit for Visual Studio Code

[![NPM Version](https://img.shields.io/npm/v/@vscode/webview-ui-toolkit?color=blue)](https://www.npmjs.com/package/@vscode/webview-ui-toolkit)
[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)](./LICENSE)
![Toolkit CI Status](https://github.com/microsoft/vscode-webview-ui-toolkit/actions/workflows/ci.yml/badge.svg)
![Deploy Docs Status](https://github.com/microsoft/vscode-webview-ui-toolkit/actions/workflows/docs-cd.yml/badge.svg)

![Webview Toolkit for Visual Studio Code Artwork](./docs/assets/images/toolkit-artwork.png)

## Introduction

The Webview UI Toolkit is a component library for building [webview-based extensions](https://code.visualstudio.com/api/extension-guides/webview) in Visual Studio Code.

Some of the library's features include:

-   **Visual Studio Code design language:** All components follow the design language of Visual Studio Code, which enables developers to create extensions that have a consistent look and feel with the rest of the editor.
-   **Automatic support for color themes:** All components are designed with theming in mind, and will automatically display the current editor theme.
-   **Tech stacks:** The library ships as a set of web components. This means developers can use the toolkit no matter which tech stack – React, Vue, Svelte, etc. – their extension is built with.
-   **Immediate accessibility:** All components ship with web-standard compliant ARIA labels and keyboard navigation.

## Getting started

Follow the [Getting Started Guide](./docs/getting-started.md).

If you already have a webview-based extension, you can install the toolkit with the following command:

```
npm install --save @vscode/webview-ui-toolkit
```

## Documentation

For more information, check out the following documentation:

-   [Component Docs](./docs/components.md)
-   [Toolkit Extension Samples](https://github.com/microsoft/vscode-webview-ui-toolkit-samples)
-   [Figma Toolkit](https://www.figma.com/community/file/1071566662997054792/Webview-UI-Toolkit-for-Visual-Studio-Code)
-   [Storybook (Interactive Component Sandbox)](https://microsoft.github.io/vscode-webview-ui-toolkit/)
-   [Visual Studio Code Webview Guide](https://code.visualstudio.com/api/extension-guides/webview)
-   [Visual Studio Code Webview Guidelines](https://code.visualstudio.com/api/references/extension-guidelines#webviews)
-   [Visual Studio Code Extension API Docs](https://code.visualstudio.com/api)

## A note on webview usage

Webviews are a powerful way to add custom functionality beyond what the Visual Studio Code API supports. They're fully customizable, which, historically, has meant that the responsibility of developing UI which aligns with the Visual Studio Code design language and follows our [webview guidelines](https://code.visualstudio.com/api/references/extension-guidelines#webviews) lies in the hands of extension authors.

The Webview UI Toolkit shifts _some_ of this responsibility away from extension developers. It does this by providing core components that make it easier to build higher quality webview UIs in Visual Studio Code.

With all this said, we still strongly encourage you to carefully review whether or not your extension needs to use webviews before building. While webviews provide a great way to add custom functionality, oftentimes, they come at the cost of performance and accessibility.

The core Visual Studio Code API provides a vast array of building blocks for highly performant, accessible, and tightly integrated extension experiences. Generally, we encourage you to use them before webviews. If you haven't already, check out this [overview of API capabilities](https://code.visualstudio.com/api/extension-capabilities/overview) to get an idea of what's possible.

Finally, if you're ever unsure if your extension should use webviews or not, you should open an issue and we'll give you some feedback and guidance.

## Contributing

Read the [contributing](./CONTRIBUTING.md) documentation.

## Legal notices

Microsoft and any contributors grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the [LICENSE](LICENSE) file.

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft’s Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party’s policies.

Privacy information can be found [here](https://privacy.microsoft.com/en-us/).

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents, or trademarks, whether by implication, estoppel or otherwise.
