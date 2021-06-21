# VS Code Tag

The `vscode-tag` component is used to label an item, attract attention, and/or flag status.

## Attributes

| Attribute    | Type   | Description                                                                   |
| ------------ | ------ | ----------------------------------------------------------------------------- |
| `appearance` | string | Determines the visual appearance of the tag. Options: `primary`, `secondary`. |

## Usage

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-tag--default)

```html
<vscode-tag>TAG TEXT</vscode-tag>
```

### Appearance Attribute

There are a number of visual appearances that the `vscode-tag` can have. The default appearance is `primary`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-tag--secondary)

```html
<vscode-tag appearance="primary">TAG TEXT</vscode-tag>
<vscode-tag appearance="secondary">TAG TEXT</vscode-tag>
```
