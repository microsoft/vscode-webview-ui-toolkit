# VSCode Text Area

The `vscode-text-area` is a web component implementation of an [HTML Text Area Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).

## Attributes

| Attribute     | Type    | Description                                                                                |
| ------------- | ------- | ------------------------------------------------------------------------------------------ |
| `autofocus`   | boolean | Indicates that this component should get focus after the page finishes loading.            |
| `cols`        | number  | Sizes the component horizontally by a number of character columns. Defaults to 20.         |
| `form`        | string  | The `id` of the `form` that the component is associated with.                              |
| `maxlength`   | number  | The maximum number of characters a user can enter.                                         |
| `minlength`   | number  | The minimum number of characters a user can enter.                                         |
| `name`        | string  | The name of the component.                                                                 |
| `placeholder` | string  | Sets the placeholder value of the component, generally used to provide a hint to the user. |
| `readonly`    | boolean | When true, the control will be immutable by any user interaction.                          |
| `resize`      | string  | The resize mode of the component. Options: `none`, `vertical`, `horizontal`, `both`.       |
| `rows`        | number  | Sizes the component vertically by a number of character rows.                              |
| `spellcheck`  | boolean | Sets if the component is eligible for spell checking.                                      |

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--default)

```html
<vscode-text-area></vscode-text-area>
```

### Autofocus Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-autofocus)

```html
<vscode-text-area autofocus></vscode-text-area>
```

### Cols Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-custom-cols)

```html
<vscode-text-area cols="50"></vscode-text-area>
```

### Form Attribute

The `form` attribute should contain the `id` value of the form element that the `vscode-text-area` is associated with. The associated form element should be in the same document as the `vscode-text-area`.

This attribute allows you to place the `vscode-text-area` component anywhere within a document, not just as the child of a form element.

**Note**

If this attribute is not specified, the `vscode-text-area` should be a child of a form element.

```html
<form id="sample-form"></form>
<!-- ... arbitrary HTML between the form and vscode-text-area ... -->
<vscode-text-area form="sample-form"></vscode-text-area>
```

### Max Length Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-max-length)

```html
<vscode-text-area maxlength="10"></vscode-text-area>
```

### Min Length Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-min-length)

```html
<vscode-text-area minlength="10"></vscode-text-area>
```

### Name Attribute

```html
<vscode-text-area name="example-vscode-text-area"></vscode-text-area>
```

### Placeholder Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-placeholder)

```html
<vscode-text-area placeholder="Placeholder Text"></vscode-text-area>
```

### Read Only Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-readonly)

```html
<vscode-text-area readonly>Read Only Text</vscode-text-area>
```

### Resize Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-resize-none)

```html
<vscode-text-area resize="none"></vscode-text-area>
```

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-resize-both)

```html
<vscode-text-area resize="both"></vscode-text-area>
```

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-resize-vertical)

```html
<vscode-text-area resize="vertical"></vscode-text-area>
```

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-resize-horizontal)

```html
<vscode-text-area resize="horizontal"></vscode-text-area>
```

### Rows Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-text-area--with-custom-rows)

```html
<vscode-text-area rows="20"></vscode-text-area>
```

### Spellcheck Attribute

Specifies whether the `vscode-text-area` is subject to spell checking by the underlying browser/OS. The values can be:

-   `true`: Indicates that the element needs to have its spelling and grammar checked.
-   `false`: Indicates that the element should not be spell checked.

```html
<vscode-text-area spellcheck="true"></vscode-text-area>
<vscode-text-area spellcheck="false"></vscode-text-area>
```
