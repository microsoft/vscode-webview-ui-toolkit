# VSCode Select

The `vscode-select` is a web component implementation of an [HTML Select Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

## Attributes

| Attribute  | Type    | Description                                                                                |
| ---------- | ------- | ------------------------------------------------------------------------------------------ |
| `disabled` | boolean | Disables the select and child options.                                                     |
| `open`     | boolean | If true, toggles the select to the open position.                                          |
| `position` | string  | Reflects the placement for the listbox when the select is open. Options: `above`, `below`. |

## Usage

The `vscode-select` component must be used with the `vscode-option` component.

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-select--default)

```html
<vscode-select>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-select>
```

### Disabled Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-select--with-disabled)

```html
<vscode-select disabled>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-select>
```

### Open Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-select--with-open)

```html
<vscode-select open>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-select>
```

### Position Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-select--with-position-above)

```html
<vscode-select position="above">
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-select>
```

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-select--with-position-below)

```html
<vscode-select position="below">
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-select>
```

### Custom Indicator

The default indicator is a downward facing chevron, but it can customized by adding an element with the attribute `slot="indicator"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-select--with-custom-indicator)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-select>
	<span slot="indicator" class="codicon codicon-settings"></span>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-select>
```
