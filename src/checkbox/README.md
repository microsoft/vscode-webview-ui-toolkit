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

**Web Component:** [Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--default)

```html
<vscode-checkbox>Label</vscode-checkbox>
```

**React Component**

```jsx
import {VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

<VSCodeCheckbox>Label</VSCodeCheckbox>
```

### Autofocus Attribute

**Web Component:** [Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-autofocus)

```html
<vscode-checkbox autofocus>Label</vscode-checkbox>
```

**React Component**

```jsx
import {VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

<VSCodeCheckbox autofocus>Label</VSCodeCheckbox>
```

### Checked Attribute

**Web Component:** [Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-checked)

```html
<vscode-checkbox checked>Label</vscode-checkbox>
```

**React Component**

```jsx
import {VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

<VSCodeCheckbox checked>Label</VSCodeCheckbox>
```

### Disabled Attribute

**Web Component:** [Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-disabled)

```html
<vscode-checkbox disabled>Label</vscode-checkbox>
```

**React Component**

```jsx
import {VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

<VSCodeCheckbox disabled>Label</VSCodeCheckbox>
```

### Readonly Attribute

**Web Component:** [Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-read-only)

```html
<vscode-checkbox readonly>Label</vscode-checkbox>
```

**React Component**

```jsx
import {VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

<VSCodeCheckbox readonly>Label</VSCodeCheckbox>
```

### Required Attribute

```html
<vscode-checkbox required>Label</vscode-checkbox>
```

**React Component**

```jsx
import {VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

<VSCodeCheckbox required>Label</VSCodeCheckbox>
```

### Value Attribute

**Web Component:** [Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-value)

```html
<vscode-checkbox value="baz">Label</vscode-checkbox>
```

**React Component**

```jsx
import {VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

<VSCodeCheckbox value="baz">Label</VSCodeCheckbox>
```

### Indeterminate Property

Checkboxes can also render an indeterminate state. This is achieved by getting a reference to a given checkbox using JavaScript and then setting the `indeterminate` property of the checkbox to `true`.

**Web Component:** [Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-checkbox--with-indeterminate)

```javascript
const checkbox = document.getElementById('basic-checkbox');
checkbox.indeterminate = true;
```

```html
<vscode-checkbox id="basic-checkbox">Label</vscode-checkbox>
```

**React Component**

```jsx
import {VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

// TODO: Add example
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

**React Component**

```jsx
import {VSCodeButton, VSCodeCheckbox} from '@vscode/webview-ui-toolkit/react';

<VSCodeCheckbox value="baz">Label</VSCodeCheckbox>
<form>
	<fieldset>
		<legend>Fieldset Legend</legend>
		<VSCodeCheckbox checked required>Checked + Required</VSCodeCheckbox>
		<VSCodeCheckbox checked readonly>Checked + Readonly</VSCodeCheckbox>
		<VSCodeCheckbox autofocus>Autofocus</VSCodeCheckbox>
		<VSCodeCheckbox disabled>Disabled</VSCodeCheckbox>
		<VSCodeCheckbox value="baz">Value Set To "baz"</VSCodeCheckbox>
	</fieldset>
	<VSCodeButton type="submit">Submit Button</VSCodeButton>
</form>
```
