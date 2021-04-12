# VSCode Option

The `vscode-option` is a web component implementation of an [Option](https://w3c.github.io/aria/#option).

The `vscode-option` component will only provide internals related to form association when used within a form-associated component. See the `vscode-select` component for more details.

## Attributes

| Attribute  | Type    | Description                                                         |
| ---------- | ------- | ------------------------------------------------------------------- |
| `disabled` | boolean | The disabled state of the option.                                   |
| `selected` | boolean | The selected attribute value. This sets the initial selected value. |
| `value`    | string  | The initial value of the option.                                    |

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-option--default)

```html
<vscode-option>Option Label</vscode-option>
```

### Disabled Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-option--with-disabled)

```html
<vscode-option disabled>Option Label</vscode-option>
```

### Selected Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-option--with-selected)

```html
<vscode-option selected>Option Label</vscode-option>
```

### Value Attribute

```html
<vscode-option value="example-option-value">Option Label</vscode-option>
```

### Start Icon

An icon can be added to the left of the Option text by adding an element with the attribute `slot="start"`, such as an SVG icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-option--with-start-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-option>
	Option Label
	<svg slot="start" class="codicon codicon-symbol-method"></svg>
</vscode-option>
```

### End Icon

An icon can be added to the right of the Option text by adding an element with the attribute `slot="end"`, such as an SVG icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-option--with-end-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-option>
	Option Label
	<svg slot="end" class="codicon codicon-symbol-method"></svg>
</vscode-option>
```
