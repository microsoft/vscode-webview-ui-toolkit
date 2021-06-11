# VS Code Badge

The `vscode-badge` component is used to highlight an item, attract attention, and/or flag status.

## Attributes

| Attribute    | Type    | Description                                                                    |
| ------------ | ------- | ------------------------------------------------------------------------------ |
| `appearance` | string  | Determines the visual appearance of the badge. Options: `primary`, `secondary` |
| `circular`   | boolean | Indicates the element should be circular.                                      |

## Usage

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-badge--default)

```html
<vscode-badge>BADGE TEXT</vscode-badge>
```

### Appearance Attribute

There are a number of visual appearances that the `vscode-badge` can have. The default appearance is `primary`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-badge--secondary)

```html
<vscode-badge appearance="primary">BADGE TEXT</vscode-badge>
<vscode-badge appearance="secondary">BADGE TEXT</vscode-badge>
```

### Circular Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-badge--circular)

```html
<vscode-badge circular="true">1</vscode-badge>
```
