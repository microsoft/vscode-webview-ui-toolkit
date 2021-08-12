# VS Code Badge

The `vscode-badge` component is used to highlight an item, attract attention, and/or flag status.

## Attributes

| Attribute    | Type   | Description                                                                    |
| ------------ | ------ | ------------------------------------------------------------------------------ |
| `appearance` | string | Determines the visual appearance of the badge. Options: `primary`, `secondary` |

## Usage

A `vscode-badge` should only contain numbers to follow the conventions of the VS Code design language.

If a component that labels an item with a string is desired, see the `vscode-tag` component.

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-badge--default)

```html
<vscode-badge>1</vscode-badge>
```

### Appearance Attribute

There are a number of visual appearances that the `vscode-badge` can have. The default appearance is `primary`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-badge--secondary)

```html
<vscode-badge appearance="primary">1</vscode-badge>
<vscode-badge appearance="secondary">1</vscode-badge>
```
