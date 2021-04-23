# VSCode Link

The `vscode-link` is a web component implementation of an [HTML Anchor Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). The component supports the same visual appearances as the button component (primary, secondary, text, install, link). The only difference is that the link appearance is default in the `vscode-link` component.

## Attributes

| Attribute        | Type    | Description                                                                               |
| ---------------- | ------- | ----------------------------------------------------------------------------------------- |
| `appearance`     | string  | Determines the visual appearance _(link, primary, secondary, text, install)_ of the link. |
| `autofocus`      | boolean | Determines if the element should receive document focus on page load.                     |
| `disabled`       | boolean | Prevents the user from interacting with the button––it cannot be pressed or focused.      |
| `download`       | boolean | Prompts the user to save the linked URL instead of navigating to it.                      |
| `href`           | string  | The URL that the hyperlink points to.                                                     |
| `hreflang`       | string  | Hints at the human language of the linked URL.                                            |
| `ping`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).        |
| `referrerpolicy` | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).        |
| `rel`            | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).        |
| `target`         | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).        |
| `type`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).        |

## Usage

### Basic Usage (With Href Attribute)

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--default)

```html
<vscode-link href="#">Link Text</vscode-link>
```

### Appearance Attribute

There are a number of visual appearances that the `vscode-link` can have. The default appearance is `link`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--default)

```html
<vscode-link href="#" appearance="link">Link Text</vscode-link>
<vscode-link href="#" appearance="primary">Link Text</vscode-link>
<vscode-link href="#" appearance="secondary">Link Text</vscode-link>
<vscode-link href="#" appearance="text">Link Text</vscode-link>
<vscode-link href="#" appearance="install">Link Text</vscode-link>
```

### Autofocus Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--with-autofocus)

```html
<vscode-link href="#" autofocus>Link Text</vscode-link>
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
<!-- Note: Using VSCode Codicon Library -->

<vscode-link href="#">
	Link Text
	<span slot="start" class="codicon codicon-git-merge"></span>
</vscode-link>
```

### End Icon

An icon can be added to the right of the Link text by adding an element with the attribute `slot="end"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--with-end-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-link href="#">
	Link Text
	<span slot="end" class="codicon codicon-chevron-right"></span>
</vscode-link>
```

### Icon Only

An icon can also fill the default slot of the Button component (instead of text) to create an Icon Button.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-link--with-icon-only)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-link href="#">
	<span class="codicon codicon-check"></span>
</vscode-link>
```
