# Visual Studio Code Dropdown

The `vscode-dropdown` is a web component implementation of a [select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

## Attributes

| Attribute  | Type    | Description                                                                                  |
| ---------- | ------- | -------------------------------------------------------------------------------------------- |
| `disabled` | boolean | Disables the dropdown and child options.                                                     |
| `open`     | boolean | If true, toggles the dropdown to the open position.                                          |
| `position` | string  | Reflects the placement for the listbox when the dropdown is open. Options: `above`, `below`. |

## Usage

The `vscode-dropdown` component must be used with the `vscode-option` component.

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-dropdown--default)

```html
<vscode-dropdown>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

### Disabled Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-dropdown--with-disabled)

```html
<vscode-dropdown disabled>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

### Open Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-dropdown--with-open)

```html
<vscode-dropdown open>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

### Position Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-dropdown--with-position-above)

```html
<vscode-dropdown position="above">
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

```html
<vscode-dropdown position="below">
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

### Custom Indicator

The default indicator is a downward facing chevron, but it can customized by adding an element with the attribute `slot="indicator"`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-dropdown--with-custom-indicator)

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-dropdown>
	<span slot="indicator" class="codicon codicon-settings"></span>
	<vscode-option>Option Label #1</vscode-option>
	<vscode-option>Option Label #2</vscode-option>
	<vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```
