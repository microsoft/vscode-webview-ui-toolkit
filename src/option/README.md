# Visual Studio Code Option

The `vscode-option` is a web component implementation of an [option](https://w3c.github.io/aria/#option).

The `vscode-option` component will only provide internals related to form association when used within a form-associated component. See the `vscode-dropdown` component for more details.

## Attributes

| Attribute  | Type    | Description                                                         |
| ---------- | ------- | ------------------------------------------------------------------- |
| `disabled` | boolean | The disabled state of the option.                                   |
| `selected` | boolean | The selected attribute value. This sets the initial selected value. |
| `value`    | string  | The initial value of the option.                                    |

## Usage

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-option--default)

```html
<vscode-option>Option Label</vscode-option>
```

### Disabled Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-option--with-disabled)

```html
<vscode-option disabled>Option Label</vscode-option>
```

### Selected Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-option--with-selected)

```html
<vscode-option selected>Option Label</vscode-option>
```

### Value Attribute

```html
<vscode-option value="example-option-value">Option Label</vscode-option>
```
