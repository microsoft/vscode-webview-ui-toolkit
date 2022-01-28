# Visual Studio Code Text Field

The `vscode-text-field` is a web component implementation of a [text field element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/text).

![Text field hero](/docs/assets/text-field-hero.png)

## Usage

| ❌ Don't                                                                                                                                    | ✅ Do                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| ![Image placeholder](/docs/assets/img-placeholder.png)                                                                                      | ![Image placeholder](/docs/assets/img-placeholder.png) |
| Don't use a text field for inputs that are greater than a single line of text. Use a [text-area](../text-area/README.md) component instead. | Use text fields for short input values.                |

| ❌ Don't                                                                      | ✅ Do                                                                     |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png)                        | ![Image placeholder](/docs/assets/img-placeholder.png)                    |
| Don't use a placeholder value instead of a label unless absolutely necessary. | Use descriptive labels to help users understand the text field's purpose. |

| ❌ Don't                                                   | ✅ Do                                                             |
| ---------------------------------------------------------- | ----------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png)     | ![Image placeholder](/docs/assets/img-placeholder.png)            |
| Don't include critical information in a placeholder value. | Use additional captions if necessary to provide more information. |

| ❌ Don't                                               | ✅ Do                                                                 |
| ------------------------------------------------------ | --------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png) | ![Image placeholder](/docs/assets/img-placeholder.png)                |
| Don't use decorative icons in a text field.            | Use icons to help users quickly identify the purpose of a text field. |

## Implementation

### Attributes

| Attribute     | Type    | Description                                                                                |
| ------------- | ------- | ------------------------------------------------------------------------------------------ |
| `autofocus`   | boolean | Indicates that this component should get focus after the page finishes loading.            |
| `disabled`    | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.       |
| `maxlength`   | number  | The maximum number of characters a user can enter.                                         |
| `name`        | string  | The name of the component.                                                                 |
| `placeholder` | string  | Sets the placeholder value of the component, generally used to provide a hint to the user. |
| `readonly`    | boolean | When true, the control will be immutable by any user interaction.                          |
| `size`        | number  | Sets the width of the element to a specified number of characters.                         |
| `type`        | string  | Sets the text field type.                                                                  |
| `value`       | string  | The value (i.e. content) of the text field.                                                |

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--default)

```html
<vscode-text-field>Text Field Label</vscode-text-field>
```

### Autofocus Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-autofocus)

```html
<vscode-text-field autofocus>Text Field Label</vscode-text-field>
```

### Disabled Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-disabled)

```html
<vscode-text-field disabled>Text Field Label</vscode-text-field>
```

### Max Length Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-max-length)

```html
<vscode-text-field maxlength="10">Text Field Label</vscode-text-field>
```

### Name Attribute

```html
<vscode-text-field name="example-vscode-text-field"
	>Text Field Label</vscode-text-field
>
```

### Placeholder Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-placeholder)

```html
<vscode-text-field placeholder="Placeholder Text"
	>Text Field Label</vscode-text-field
>
```

### Read Only Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-readonly)

```html
<vscode-text-field readonly>Text Field Label</vscode-text-field>
```

### Size Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-custom-size)

```html
<vscode-text-field size="50">Text Field Label</vscode-text-field>
```

### Type Attribute

Sets the text field type. Valid options include: "email", "password", "tel", "text", and "url". The default value is "text".

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-type)

```html
<vscode-text-field type="email">Text Field Label</vscode-text-field>
<vscode-text-field type="password">Text Field Label</vscode-text-field>
<vscode-text-field type="tel">Text Field Label</vscode-text-field>
<vscode-text-field type="text">Text Field Label</vscode-text-field>
<vscode-text-field type="url">Text Field Label</vscode-text-field>
```

### Start Icon

An icon can be added to the left of the text field by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-start-icon)

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-text-field>
	Text Field Label
	<span slot="start" class="codicon codicon-git-merge"></span>
</vscode-text-field>
```

### End Icon

An icon can be added to the right of the text field by adding an element with the attribute `slot="end"`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-text-field--with-end-icon)

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-text-field>
	Text Field Label
	<span slot="end" class="codicon codicon-chevron-right"></span>
</vscode-text-field>
```
