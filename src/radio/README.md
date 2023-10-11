# Visual Studio Code Radio

The `vscode-radio` is a web component implementation of a [radio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio).

![Radio hero](/docs/assets/images/radio-hero.png)

## Usage

For guidelines on usage in an extension, see the [vscode-radio-group](../radio-group/README.md) component.

## Implementation

[Interactive component examples](https://codesandbox.io/s/radio-sample-ji9x7v?file=/index.html)

### Attributes

| Attribute  | Type    | Description                                                                         |
| ---------- | ------- | ----------------------------------------------------------------------------------- |
| `checked`  | boolean | When true, the radio is toggled on.                                                 |
| `disabled` | boolean | Prevents the user from interacting with the radio––it cannot be pressed or focused. |
| `readonly` | boolean | Indicates whether the radio is checked or not.                                      |
| `value`    | string  | The string to use as the value of the radio.                                        |

### Basic Radio

```html
<vscode-radio>Radio Label</vscode-radio>
```

### Checked Attribute

```html
<vscode-radio checked>Radio Label</vscode-radio>
```

### Read Only Attribute

```html
<vscode-radio readonly>Radio Label</vscode-radio>
```

### Disabled Attribute

```html
<vscode-radio disabled>Radio Label</vscode-radio>
```

### Value Attribute

```html
<vscode-radio value="some-value">Radio Label</vscode-radio>
```
