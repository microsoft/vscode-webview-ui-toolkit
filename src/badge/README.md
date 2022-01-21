# Visual Studio Code Badge

The `vscode-badge` component is used to highlight an item, attract attention, and/or flag status.

![Badge hero](/docs/assets/docs-hero.png)

## Usage

A `vscode-badge` can only contain numbers to follow the conventions of the Visual Studio Code design language.

If a component that labels an item with a string is desired, see the `vscode-tag` component.

| ❌ Don't                                               | ✅ Do                                                    |
| ------------------------------------------------------ | -------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png) | ![Image placeholder](/docs/assets/img-placeholder.png)   |
| Don't use a badge to indicate an error.                | Use badges to indicate the numbered state of an element. |

| ❌ Don't                                                                                                                                 | ✅ Do                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png)                                                                                   | ![Image placeholder](/docs/assets/img-placeholder.png)               |
| Don't use a badge in place of a [VS Code Notification](https://code.visualstudio.com/api/references/extension-guidelines#notifications). | Use badges as an actionable hint for a hidden element or interaction |

| ❌ Don't                                               | ✅ Do                                                          |
| ------------------------------------------------------ | -------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png) | ![Image placeholder](/docs/assets/img-placeholder.png)         |
| Don't use more than one badge on a single element.     | Ensure badges are clearly associated with their parent element |

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-badge--default)

```html
<vscode-badge>1</vscode-badge>
```

## Attributes

None
