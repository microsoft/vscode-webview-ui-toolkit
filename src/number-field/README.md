# VS Code Number Field

The `vscode-number-field` is a web component implementation of an [HTML Text Field Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/text).

## Attributes

| Attribute     | Type    | Description                                                                                |
| ------------- | ------- | ------------------------------------------------------------------------------------------ |
| `autofocus`   | boolean | Indicates that this component should get focus after the page finishes loading.            |
| `disabled`    | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.       |
| `name`        | string  | The name of the component.                                                                 |
| `placeholder` | string  | Sets the placeholder value of the component, generally used to provide a hint to the user. |
| `readonly`    | boolean | When true, the control will be immutable by any user interaction.                          |
| `size`        | number  | Sets the width of the element to a specified number of characters.                         |

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-number-field--default)

```html
<vscode-number-field></vscode-number-field>
```

### Autofocus Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-number-field--with-autofocus)

```html
<vscode-number-field autofocus></vscode-number-field>
```

### Disabled Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-number-field--with-disabled)

```html
<vscode-number-field disabled></vscode-number-field>
```

### Name Attribute

```html
<vscode-number-field name="example-vscode-number-field"></vscode-number-field>
```

### Placeholder Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-number-field--with-placeholder)

```html
<vscode-number-field placeholder="Placeholder Text"></vscode-number-field>
```

### Read Only Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-number-field--with-readonly)

```html
<vscode-number-field readonly>Read Only Text</vscode-number-field>
```

### Size Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-number-field--with-custom-size)

```html
<vscode-number-field size="50"></vscode-number-field>
```

### Start Icon

An icon can be added to the left of the text field by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-number-field--with-start-icon)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-number-field>
	<span slot="start" class="codicon codicon-git-merge"></span>
</vscode-number-field>
```
