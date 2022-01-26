# Visual Studio Code Link

The `vscode-link` is a web component implementation of an [anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

![Link hero](/docs/assets/link-hero.png)

## Usage

| ❌ Don't                                               | ✅ Do                                                                     |
| ------------------------------------------------------ | ------------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png) | ![Image placeholder](/docs/assets/img-placeholder.png)                    |
| Don't use a link for actions or commands.              | Use a link to to navigate to another location in a project or on the web. |

| ❌ Don't                                               | ✅ Do                                                                   |
| ------------------------------------------------------ | ----------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png) | ![Image placeholder](/docs/assets/img-placeholder.png)                  |
| Avoid vague link text.                                 | Use descriptive language that provides context to what is being linked. |

## Implementation

### Attributes

| Attribute        | Type    | Description                                                                        |
| ---------------- | ------- | ---------------------------------------------------------------------------------- |
| `download`       | boolean | Prompts the user to save the linked URL instead of navigating to it.               |
| `href`           | string  | The URL that the hyperlink points to.                                              |
| `hreflang`       | string  | Hints at the human language of the linked URL.                                     |
| `ping`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes). |
| `referrerpolicy` | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes). |
| `rel`            | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes). |
| `target`         | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes). |
| `type`           | string  | See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes). |

### Basic Usage (With Href Attribute)

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-link--default)

```html
<vscode-link href="#">Link Text</vscode-link>
```
