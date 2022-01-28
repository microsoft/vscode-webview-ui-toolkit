# Visual Studio Code Radio

The `vscode-radio` is a web component implementation of a [radio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio).

![Radio hero](/docs/assets/radio-hero.png)

## Usage

For guidelines on usage in an extension, see the [vscode-radio-group](../radio-group/README.md) component.

## Attributes

| Attribute  | Type    | Description                                                                         |
| ---------- | ------- | ----------------------------------------------------------------------------------- |
| `checked`  | boolean | When true, the radio is toggled on.                                                 |
| `disabled` | boolean | Prevents the user from interacting with the radio––it cannot be pressed or focused. |
| `readonly` | boolean | Indicates whether the radio is checked or not.                                      |
| `value`    | string  | The string to use as the value of the radio.                                        |

## Implementation

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-radio--default)

```html
<vscode-radio>Radio Label</vscode-radio>
```

### Checked Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-radio--with-checked)

```html
<vscode-radio checked>Radio Label</vscode-radio>
```

### Read Only Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-radio--with-read-only)

```html
<vscode-radio readonly>Radio Label</vscode-radio>
```

### Disabled Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-radio--with-disabled)

```html
<vscode-radio disabled>Radio Label</vscode-radio>
```
