# Visual Studio Code Checkbox

The `vscode-checkbox` is a web component implementation of a [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox).

![Checkbox hero](/docs/assets/images/checkbox-hero.png)

## Usage

| ❌ Don't                                                      | ✅ Do                                                                                                                                                                                             |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/images/checkbox-dont-1.png) | ![Image placeholder](/docs/assets/images/checkbox-do-1.png)                                                                                                                                       |
| Avoid grouping unrelated checkboxes together.                 | Split related checkboxes into groups of with descriptive labels. It's ok to group up to three loosely-unrelated checkboxes into one group if using a label that generally captures their purpose. |

| ❌ Don't                                                      | ✅ Do                                                                           |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/images/checkbox-dont-2.png) | ![Image placeholder](/docs/assets/images/checkbox-do-2.png)                     |
| Avoid using horizontal checkbox group layouts.                | Arrange checkbox groups vertically to make it easy to scan and compare options. |

| ❌ Don't                                                                                   | ✅ Do                                                       |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| ![Image placeholder](/docs/assets/images/checkbox-dont-3.png)                              | ![Image placeholder](/docs/assets/images/checkbox-do-3.png) |
| Don't use an ambiguous label that makes it difficult to understand what the checkbox does. | Use checkbox labels that imply clearly opposite states.     |

| ❌ Don't                                                      | ✅ Do                                                       |
| ------------------------------------------------------------- | ----------------------------------------------------------- |
| ![Image placeholder](/docs/assets/images/checkbox-dont-4.png) | ![Image placeholder](/docs/assets/images/checkbox-do-4.png) |
| Don't use long blocks of text.                                | Use concise language to describe each option.               |

## Implementation

[Interactive component examples](https://codesandbox.io/s/checkbox-sample-xu5llt?file=/index.html)

### Attributes

| Attribute   | Type    | Description                                                                              |
| ----------- | ------- | ---------------------------------------------------------------------------------------- |
| `autofocus` | boolean | Determines if the element should receive document focus on page load.                    |
| `checked`   | boolean | When true, the checkbox is toggled on by default.                                        |
| `disabled`  | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.     |
| `readonly`  | boolean | When true, the control will be immutable by user interaction.                            |
| `required`  | boolean | Indicates that the user must check the checkbox before the owning form can be submitted. |
| `value`     | string  | The string to use as the value of the checkbox when submitting the form                  |

### Properties

| Attribute       | Type    | Description                                                               |
| --------------- | ------- | ------------------------------------------------------------------------- |
| `indeterminate` | boolean | Determines if the element should render the indeterminate checkbox state. |

### Basic Checkbox

```html
<vscode-checkbox>Label</vscode-checkbox>
```

### Autofocus Attribute

```html
<vscode-checkbox autofocus>Label</vscode-checkbox>
```

### Checked Attribute

```html
<vscode-checkbox checked>Label</vscode-checkbox>
```

### Disabled Attribute

```html
<vscode-checkbox disabled>Label</vscode-checkbox>
```

### Readonly Attribute

```html
<vscode-checkbox readonly>Label</vscode-checkbox>
```

### Required Attribute

```html
<vscode-checkbox required>Label</vscode-checkbox>
```

### Value Attribute

```html
<vscode-checkbox value="baz">Label</vscode-checkbox>
```

### Indeterminate Property

Checkboxes can also render an indeterminate state. This is achieved by getting a reference to a given checkbox using JavaScript and then setting the `indeterminate` property of the checkbox to `true`.

```javascript
const checkbox = document.getElementById("basic-checkbox");
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
