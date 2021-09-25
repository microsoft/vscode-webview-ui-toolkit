# Visual Studio Code Checkbox

The `vscode-checkbox` is a web component implementation of a [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox).

## Attributes

| Attribute   | Type    | Description                                                                              |
| ----------- | ------- | ---------------------------------------------------------------------------------------- |
| `autofocus` | boolean | Determines if the element should receive document focus on page load.                    |
| `checked`   | boolean | When true, the checkbox is toggled on by default.                                        |
| `disabled`  | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.     |
| `readonly`  | boolean | When true, the control will be immutable by user interaction.                            |
| `required`  | boolean | Indicates that the user must check the checkbox before the owning form can be submitted. |
| `value`     | string  | The string to use as the value of the checkbox when submitting the form                  |

## Properties

| Attribute       | Type    | Description                                                               |
| --------------- | ------- | ------------------------------------------------------------------------- |
| `indeterminate` | boolean | Determines if the element should render the indeterminate checkbox state. |

## Usage

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--default)

```html
<vscode-checkbox>Label</vscode-checkbox>
```

### Autofocus Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-autofocus)

```html
<vscode-checkbox autofocus>Label</vscode-checkbox>
```

### Checked Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-checked)

```html
<vscode-checkbox checked>Label</vscode-checkbox>
```

### Disabled Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-disabled)

```html
<vscode-checkbox disabled>Label</vscode-checkbox>
```

### Readonly Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-read-only)

```html
<vscode-checkbox readonly>Label</vscode-checkbox>
```

### Required Attribute

```html
<vscode-checkbox required>Label</vscode-checkbox>
```

### Value Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-value)

```html
<vscode-checkbox value="baz">Label</vscode-checkbox>
```

### Indeterminate Property

Checkboxes can also render an indeterminate state. This is achieved by getting a reference to a given checkbox using JavaScript and then setting the `indeterminate` property of the checkbox to `true`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-indeterminate)

```javascript
const checkbox = document.getElementById('basic-checkbox');
checkbox.indeterminate = true;
```

```html
<vscode-checkbox id="basic-checkbox">Label</vscode-checkbox>
```

### Form Usage

Here is an example of the Visual Studio Code Checkbox and its various attributes being used in a form.

```html
<form>
	<fieldset>
		<legend>Fieldset Legend</legend>
		<vscode-checkbox checked required>Checked + Required</vscode-checkbox>
		<vscode-checkbox checked readonly>Checked + Readonly</vscode-checkbox>
		<vscode-checkbox autofocus>Autofocus</vscode-checkbox>
		<vscode-checkbox disabled>Disabled</vscode-checkbox>
		<vscode-checkbox value="baz">Value Set To "baz"</vscode-checkbox>
	</fieldset>
	<vscode-button type="submit">Submit Button</vscode-button>
</form>
```
