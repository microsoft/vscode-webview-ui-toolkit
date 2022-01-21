# Visual Studio Code Badge

The `vscode-badge` component is used to highlight an item, attract attention, and/or flag status.

![Badge hero](/docs/assets/badge-hero.png)

## Usage

A `vscode-badge` can only contain numbers to follow the conventions of the Visual Studio Code design language.

If a component that labels an item with a string is desired, see the `vscode-tag` component.

| ❌ Don't                                            | ✅ Do                                                    |
| --------------------------------------------------- | -------------------------------------------------------- |
| ![Image placeholder](/docs/assets/badge-dont-1.png) | ![Image placeholder](/docs/assets/badge-do-1.png)        |
| Don't use a badge to indicate an error.             | Use badges to indicate the numbered state of an element. |

| ❌ Don't                                            | ✅ Do                                                          |
| --------------------------------------------------- | -------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/badge-dont-2.png) | ![Image placeholder](/docs/assets/badge-do-2.png)              |
| Don't use more than one badge on a single element.  | Ensure badges are clearly associated with their parent element |

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-badge--default)

```html
<vscode-badge>1</vscode-badge>
```

## Attributes

None
