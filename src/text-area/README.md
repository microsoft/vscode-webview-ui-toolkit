# Visual Studio Code Text Area

The `vscode-text-area` is a web component implementation of a [text area element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

![Text area hero](/docs/assets/images/text-area-hero.png)

## Usage

Read the [text-field](../text-field/README.md) usage guidelines for general guidance when using text inputs.

| ❌ Don't                                                                                                                              | ✅ Do                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ![Text area with one line of text](/docs/assets/images/text-area-dont-1.png)                                                          | ![Text area with multiple lines of text](/docs/assets/images/text-area-do-2.png) |
| Don't use a text area for inputs requiring only a single line of text. Use a [text-field](../text-field/README.md) component instead. | Use text areas for longer text blocks that span multiple lines.                  |

| ❌ Don't                                                                                             | ✅ Do                                                                                                   |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![Text area being resized until content flows out of view](/docs/assets/images/text-area-dont-2.png) | ![Text area being resized causing layout reflow](/docs/assets/images/text-area-do-2.png)                |
| Don't let a resizable text area break an extension's layout when resized.                            | Ensure your layout reflows appropriately when a text area is resized vertically, horizontally, or both. |

| ❌ Don't                                                              | ✅ Do                                                                                              |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| ![Text area without label](/docs/assets/images/text-area-dont-3.png)  | ![Text area without label with supporting context](/docs/assets/images/text-area-do-3.png)         |
| Don't use a text area without a label without any supporting context. | Sparingly use text areas without labels in contexts where their purpose can be easily indentified. |

## Implementation

[Interactive component examples](https://codesandbox.io/s/text-area-sample-64nv4i?file=/index.html)

### Attributes

| Attribute     | Type    | Description                                                                                |
| ------------- | ------- | ------------------------------------------------------------------------------------------ |
| `autofocus`   | boolean | Indicates that this component should get focus after the page finishes loading.            |
| `cols`        | number  | Sizes the component horizontally by a number of character columns. Defaults to 20.         |
| `disabled`    | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.       |
| `form`        | string  | The `id` of the `form` that the component is associated with.                              |
| `maxlength`   | number  | The maximum number of characters a user can enter.                                         |
| `name`        | string  | The name of the component.                                                                 |
| `placeholder` | string  | Sets the placeholder value of the component, generally used to provide a hint to the user. |
| `readonly`    | boolean | When true, the control will be immutable by any user interaction.                          |
| `resize`      | string  | The resize mode of the component. Options: `none`, `vertical`, `horizontal`, `both`.       |
| `rows`        | number  | Sizes the component vertically by a number of character rows.                              |
| `value`       | string  | The value (i.e. content) of the text area.                                                 |

### Basic Text Area

```html
<vscode-text-area>Text Area Label</vscode-text-area>
```

### Autofocus Attribute

```html
<vscode-text-area autofocus>Text Area Label</vscode-text-area>
```

### Cols Attribute

```html
<vscode-text-area cols="50">Text Area Label</vscode-text-area>
```

### Disabled Attribute

```html
<vscode-text-area disabled>Text Area Label</vscode-text-area>
```

### Form Attribute

The `form` attribute should contain the `id` value of the form element that the `vscode-text-area` is associated with. The associated form element should be in the same document as the `vscode-text-area`.

This attribute allows you to place the `vscode-text-area` component anywhere within a document, not just as the child of a form element.

**Note**

If this attribute is not specified, the `vscode-text-area` should be a child of a form element.

```html
<form id="sample-form"></form>
<!-- ... arbitrary HTML between the form and vscode-text-area ... -->
<vscode-text-area form="sample-form">Text Area Label</vscode-text-area>
```

### Max Length Attribute

```html
<vscode-text-area maxlength="10">Text Area Label</vscode-text-area>
```

### Name Attribute

```html
<vscode-text-area name="example-vscode-text-area"> Text Area Label </vscode-text-area>
```

### Placeholder Attribute

```html
<vscode-text-area placeholder="Placeholder Text"> Text Area Label </vscode-text-area>
```

### Read Only Attribute

```html
<vscode-text-area readonly>Text Area Label</vscode-text-area>
```

### Resize Attribute

```html
<vscode-text-area resize="none">Text Area Label</vscode-text-area>
<vscode-text-area resize="both">Text Area Label</vscode-text-area>
<vscode-text-area resize="vertical">Text Area Label</vscode-text-area>
<vscode-text-area resize="horizontal">Text Area Label</vscode-text-area>
```

### Rows Attribute

```html
<vscode-text-area rows="20">Text Area Label</vscode-text-area>
```
