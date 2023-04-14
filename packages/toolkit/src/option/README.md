# Visual Studio Code Option

The `vscode-option` is a web component implementation of an [option](https://w3c.github.io/aria/#option).

![Option hero](/docs/assets/images/option-hero.png)

## Usage

The `vscode-option` component will only provide internals related to form association when used within a form-associated component. See the [vscode-dropdown](../dropdown/README.md) component for more details.

## Implementation

[Interactive component examples](https://codesandbox.io/s/option-sample-yqlv57?file=/index.html)

### Attributes

| Attribute  | Type    | Description                                                         |
| ---------- | ------- | ------------------------------------------------------------------- |
| `disabled` | boolean | The disabled state of the option.                                   |
| `selected` | boolean | The selected attribute value. This sets the initial selected value. |
| `value`    | string  | The initial value of the option.                                    |

### Basic Option

```html
<vscode-option>Option Label</vscode-option>
```

### Disabled Attribute

```html
<vscode-option disabled>Option Label</vscode-option>
```

### Selected Attribute

```html
<vscode-option selected>Option Label</vscode-option>
```

### Value Attribute

```html
<vscode-option value="example-option-value">Option Label</vscode-option>
```
