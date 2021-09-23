# Webview UI Toolkit for Visual Studio Code

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen)](https://opensource.org/licenses/MIT)
[![Azure Artifacts NPM Version](https://feeds.dev.azure.com/devdiv/0bdbc590-a062-4c3f-b0f6-9383f67865ee/_apis/public/Packaging/Feeds/43a1b90f-64c3-43d5-acfb-fde3765033f5/Packages/78fc9bbc-176e-4945-88aa-22c6c55099a0/Badge)](https://dev.azure.com/devdiv/DevDiv/_packaging?_a=package&feed=43a1b90f-64c3-43d5-acfb-fde3765033f5&package=78fc9bbc-176e-4945-88aa-22c6c55099a0&preferRelease=true)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue)](https://www.typescriptlang.org/)
![Test, Lint, and Build Status](https://github.com/microsoft/vscode-webview-ui-toolkit/actions/workflows/ci.yml/badge.svg)
![Build and Deploy Docs Status](https://github.com/microsoft/vscode-webview-ui-toolkit/actions/workflows/docs-cd.yml/badge.svg)

## Introduction

The Webview UI Toolkit for Visual Studio Code is a component library made for building webview-based extension UIs in Visual Studio Code that match the native look and behavior of Visual Studio Code itself. Features of the library include:

-   **Implements The Visual Studio Code Design Language:** All components implement the Visual Studio Code design language, enabling developers to create extensions that have a consistent look and feel with the rest of Visual Studio Code.
-   **Theming As A First Class Citizen:** All components were designed with theming in mind and the toolkit ships with utilities that automatically consume and apply Visual Studio Code color theme changes.
-   **Plays Nice With Your Tech Stack:** The library is built with web components meaning you will be able use the components no matter what tech stack (React, Vue, Svelte, etc.) you use.
-   **Accessible Out Of The Box:** All components ship with web standard compliant ARIA labels and keyboard navigation.

## Getting started

Follow the [Getting Started Guide](./docs/getting-started.md).

## Documentation

Beyond the Getting Started Guide, further documentation can be found in the following places:

-   [Component Docs](./docs/components.md)
-   [Storybook – Interactive Component Sandbox](https://microsoft.github.io/vscode-webview-ui-toolkit/)
-   [Toolkit Extension Samples](https://github.com/microsoft/vscode-webview-ui-toolkit-samples)
-   [Visual Studio Code Webview Guide](https://code.visualstudio.com/api/extension-guides/webview)
-   [Visual Studio Code Webview Guidelines](https://code.visualstudio.com/api/references/extension-guidelines#webviews)
-   [Visual Studio Code Extension API Docs](https://code.visualstudio.com/api)

## Contributing

See the [contributing](./CONTRIBUTING.md) documentation.

## Legal notices

Microsoft and any contributors grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the [LICENSE](LICENSE) file.

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft’s Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party’s policies.

Privacy information can be found [here](https://privacy.microsoft.com/en-us/).

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents, or trademarks, whether by implication, estoppel or otherwise.
