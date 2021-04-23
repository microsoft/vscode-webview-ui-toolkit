# VSCode Text Field

The `vscode-text-field` is a web component implementation of an [HTML Text Field Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/text).

## Attributes

| Attribute     | Type    | Description                                                                                |
| ------------- | ------- | ------------------------------------------------------------------------------------------ |
| `autofocus`   | boolean | Indicates that this component should get focus after the page finishes loading.            |
| `disabled`    | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.       |
| `maxlength`   | number  | The maximum number of characters a user can enter.                                         |
| `minlength`   | number  | The minimum number of characters a user can enter.                                         |
| `name`        | string  | The name of the component.                                                                 |
| `pattern`     | string  | A regular expression that the value must match to pass validation.                         |
| `placeholder` | string  | Sets the placeholder value of the component, generally used to provide a hint to the user. |
| `readonly`    | boolean | When true, the control will be immutable by any user interaction.                          |
| `size`        | number  | Sets the width of the element to a specified number of characters.                         |
| `spellcheck`  | boolean | Sets if the component is eligible for spell checking.                                      |

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--default)

```html
<vscode-text-field></vscode-text-field>
```

### Autofocus Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-autofocus)

```html
<vscode-text-field autofocus></vscode-text-field>
```

### Disabled Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-disabled)

```html
<vscode-text-field disabled></vscode-text-field>
```

### Max Length Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-max-length)

```html
<vscode-text-field maxlength="10"></vscode-text-field>
```

### Min Length Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-min-length)

```html
<vscode-text-field minlength="10"></vscode-text-field>
```

### Name Attribute

```html
<vscode-text-field name="example-vscode-text-field"></vscode-text-field>
```

### Pattern Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-pattern)

```html
<vscode-text-field pattern="[a-z]{4,8}"></vscode-text-field>
```

### Placeholder Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-placeholder)

```html
<vscode-text-field placeholder="Placeholder Text"></vscode-text-field>
```

### Read Only Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-readonly)

```html
<vscode-text-field readonly>Read Only Text</vscode-text-field>
```

### Size Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-custom-size)

```html
<vscode-text-field size="50"></vscode-text-field>
```

### Spellcheck Attribute

Specifies whether the `vscode-text-field` is subject to spell checking by the underlying browser/OS. The values can be:

-   `true`: Indicates that the element needs to have its spelling and grammar checked.
-   `false`: Indicates that the element should not be spell checked.

```html
<vscode-text-field spellcheck="true"></vscode-text-field>
<vscode-text-field spellcheck="false"></vscode-text-field>
```

### Start Icon

An icon can be added to the left of the text field by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-start-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-text-field>
	<span slot="start" class="codicon codicon-git-merge"></span>
</vscode-text-field>
```

### End Icon

An icon can be added to the right of the text field by adding an element with the attribute `slot="end"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-field--with-end-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-text-field>
	<span slot="end" class="codicon codicon-chevron-right"></span>
</vscode-text-field>
```
