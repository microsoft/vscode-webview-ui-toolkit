# VS Code Link

The `vscode-link` is a web component implementation of an [HTML Anchor Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

## Attributes

| Attribute        | Type    | Description                                                                          |
| ---------------- | ------- | ------------------------------------------------------------------------------------ |
| `disabled`       | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused. |
| `download`       | boolean | Prompts the user to save the linked URL instead of navigating to it.                 |
| `href`           | string  | The URL that the hyperlink points to.                                                |
| `hreflang`       | string  | Hints at the human language of the linked URL.                                       |
| `ping`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).   |
| `referrerpolicy` | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).   |
| `rel`            | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).   |
| `target`         | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).   |
| `type`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).   |

## Usage

### Basic Usage (With Href Attribute)

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--default)

```html
<vscode-link href="#">Link Text</vscode-link>
```

### Disabled Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--with-disabled)

```html
<vscode-link href="#" disabled>Link Text</vscode-link>
```

### Start Icon

An icon can be added to the left of Link text by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--with-start-icon)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-link href="#">
	Link Text
	<span slot="start" class="codicon codicon-git-merge"></span>
</vscode-link>
```

### End Icon

An icon can be added to the right of the Link text by adding an element with the attribute `slot="end"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--with-end-icon)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-link href="#">
	Link Text
	<span slot="end" class="codicon codicon-chevron-right"></span>
</vscode-link>
```

### Icon Only

An icon can also fill the default slot of the Button component (instead of text) to create an Icon Button.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--with-icon-only)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-link href="#">
	<span class="codicon codicon-check"></span>
</vscode-link>
```
