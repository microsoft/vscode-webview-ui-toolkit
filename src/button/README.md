# VSCode Button

The `vscode-button` is a web component implementation of an [HTML Button Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `vscode-button` also supports several visual appearances (primary, secondary, text, install, link).

## Attributes

| Attribute        | Type    | Description                                                                                 |
| ---------------- | ------- | ------------------------------------------------------------------------------------------- |
| `appearance`     | string  | Determines the visual appearance _(primary, secondary, text, install, link)_ of the button. |
| `autofocus`      | boolean | Determines if the element should receive document focus on page load.                       |
| `disabled`       | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.        |
| `form`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |
| `formaction`     | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |
| `formenctype`    | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |
| `formmethod`     | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |
| `formnovalidate` | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |
| `formtarget`     | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |
| `name`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |
| `type`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |
| `value`          | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).     |

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-button--default)

```html
<vscode-button>Button Text</vscode-button>
```

### Appearance Attribute

There are a number of visual appearances that the `vscode-button` can have. The default appearance is `primary`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-button--default)

```html
<vscode-button appearance="primary">Button Text</vscode-button>
<vscode-button appearance="secondary">Button Text</vscode-button>
<vscode-button appearance="text">Button Text</vscode-button>
<vscode-button appearance="install">Button Text</vscode-button>
<vscode-button appearance="link">Button Text</vscode-button>
```

### Autofocus Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-button--with-autofocus)

```html
<vscode-button autofocus>Button Text</vscode-button>
```

### Disabled Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-button--with-disabled)

```html
<vscode-button disabled>Button Text</vscode-button>
```

### Start Icon

An icon can be added to the left of Button text by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-button--with-start-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-button>
	Button Text
	<span slot="start" class="codicon codicon-git-merge"></span>
</vscode-button>
```

### End Icon

An icon can be added to the right of the Button text by adding an element with the attribute `slot="end"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-button--with-end-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-button>
	Button Text
	<span slot="end" class="codicon codicon-chevron-right"></span>
</vscode-button>
```

### Icon Only

An icon can also fill the default slot of the Button component (instead of text) to create an Icon Button.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-button--with-icon-only)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-button>
	<span class="codicon codicon-check"></span>
</vscode-button>
```
