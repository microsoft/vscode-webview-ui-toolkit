# Visual Studio Code Text Field

The `vscode-text-field` is a web component implementation of a [text field element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/text).

![Text field hero](/docs/assets/images/text-field-hero.png)

## Usage

| ❌ Don't                                                                                                                                    | ✅ Do                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| ![Text field with overflowing text](/docs/assets/images/text-field-dont-1.png)                                                              | ![Text field with a short value](/docs/assets/images/text-field-do-1.png) |
| Don't use a text field for inputs that are greater than a single line of text. Use a [text-area](../text-area/README.md) component instead. | Use text fields for short input values.                                   |

| ❌ Don't                                                                        | ✅ Do                                                                           |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![Text field without a formal label](/docs/assets/images/text-field-dont-2.png) | ![Text label with a descriptive label](/docs/assets/images/text-field-do-2.png) |
| Don't use a placeholder value instead of a label unless absolutely necessary.   | Use descriptive labels to help users understand the text fields purpose.        |

| ❌ Don't                                                                                                   | ✅ Do                                                                                         |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Text field with important information as a placeholder value](/docs/assets/images/text-field-dont-3.png) | ![Text field with helper text below](/docs/assets/images/text-field-do-3.png)                 |
| Don't include critical information in a placeholder value.                                                 | Use helper text if necessary to provide more information about the purpose of the text field. |

| ❌ Don't                                                                                     | ✅ Do                                                                                                      |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| ![Text field with an icon providing little value](/docs/assets/images/text-field-dont-4.png) | ![Text field with a search icon](/docs/assets/images/text-field-do-4.png)                                  |
| Don't use decorative icons in a text field.                                                  | Use icons to help users quickly identify the purpose of a text field&mdash;especially if no label is used. |

## Implementation

[Interactive component examples](https://codesandbox.io/s/text-field-sample-7ejw3c?file=/index.html)

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

### Basic Text Field

```html
<vscode-text-field>Text Field Label</vscode-text-field>
```

### Autofocus Attribute

```html
<vscode-text-field autofocus>Text Field Label</vscode-text-field>
```

### Disabled Attribute

```html
<vscode-text-field disabled>Text Field Label</vscode-text-field>
```

### Max Length Attribute

```html
<vscode-text-field maxlength="10">Text Field Label</vscode-text-field>
```

### Name Attribute

```html
<vscode-text-field name="example-vscode-text-field">Text Field Label</vscode-text-field>
```

### Placeholder Attribute

```html
<vscode-text-field placeholder="Placeholder Text">Text Field Label</vscode-text-field>
```

### Read Only Attribute

```html
<vscode-text-field readonly>Text Field Label</vscode-text-field>
```

### Size Attribute

```html
<vscode-text-field size="50">Text Field Label</vscode-text-field>
```

### Type Attribute

Sets the text field type. Valid options include: "email", "password", "tel", "text", and "url". The default value is "text".

```html
<vscode-text-field type="email">Text Field Label</vscode-text-field>
<vscode-text-field type="password">Text Field Label</vscode-text-field>
<vscode-text-field type="tel">Text Field Label</vscode-text-field>
<vscode-text-field type="text">Text Field Label</vscode-text-field>
<vscode-text-field type="url">Text Field Label</vscode-text-field>
```

### Start Icon

An icon can be added to the left of the text field by adding an element with the attribute `slot="start"`.

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-text-field>
  Text Field Label
  <span slot="start" class="codicon codicon-git-merge"></span>
</vscode-text-field>
```

### End Icon

An icon can be added to the right of the text field by adding an element with the attribute `slot="end"`.

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-text-field>
  Text Field Label
  <span slot="end" class="codicon codicon-chevron-right"></span>
</vscode-text-field>
```

### Multiple Icons

Building on top of the icon examples above, multiple icons can also be inserted into the start and end slots of a text field with the `slot="start"` and `slot="end"` attributes.

The below example demonstrates how the native search text field from VS Code might be _visually_ implemented with a `section` tag that wraps a few `vscode-buttons` with an icon appearance applied (please note that further JavaScript is needed to make this example functional, however).

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-text-field>
  Text Field Label
  <section slot="end" style="display:flex; align-items: center;">
    <vscode-button appearance="icon" aria-label="Match Case">
      <span class="codicon codicon-case-sensitive"></span>
    </vscode-button>
    <vscode-button appearance="icon" aria-label="Match Whole Word">
      <span class="codicon codicon-whole-word"></span>
    </vscode-button>
    <vscode-button appearance="icon" aria-label="Use Regular Expression">
      <span class="codicon codicon-regex"></span>
    </vscode-button>
  </section>
</vscode-text-field>
```
