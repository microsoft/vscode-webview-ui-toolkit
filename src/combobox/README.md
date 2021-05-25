# VS Code Combo Box

The `vscode-combo-box` is a web component implementation of an [HTML Text Field Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/text).

## Attributes

| Attribute      | Type    | Description                                                                                                         |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| `autocomplete` | string  | Handles autocomplete features for the control on pageload. Accepted values are `none`, `inline`, `list`, and `both` |
| `disabled`     | boolean | Disables the combobox and child options.                                                                            |
| `open`         | boolean | If true, toggles the combobox to the open position.                                                                 |
| `position`     | string  | The placement for the listbox when the combobox is open. Options: `above`, `below`                                  |

## Usage

The `vscode-combobox` component must be used with the `vscode-option` component.

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-combobox--default)

```html
<vscode-combobox>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-combobox>
```

### Disabled Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-combobox--with-disabled)

```html
<vscode-combobox disabled>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-combobox>
```

### Open Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-combobox--with-open)

```html
<vscode-combobox open>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-combobox>
```

### Position Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-combobox--with-position-above)

```html
<vscode-combobox position="above">
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-combobox>
```

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-combobox--with-position-below)

```html
<vscode-combobox position="below">
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-combobox>
```
