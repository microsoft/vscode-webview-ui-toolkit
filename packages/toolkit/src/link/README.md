# Visual Studio Code Link

The `vscode-link` is a web component implementation of an [anchor element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

![Link hero](/docs/assets/images/link-hero.png)

## Usage

| ❌ Don't                                                                               | ✅ Do                                                                  |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Link used for a refresh action](/docs/assets/images/link-dont-1.png)                 | ![Link used to navigate](/docs/assets/images/link-do-1.png)            |
| Don't use a link for actions or commands. Try a [button](../button/README.md) instead. | Use a link to navigate to another location in a project or on the web. |

| ❌ Don't                                                                                | ✅ Do                                                                                                                                    |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| ![Link with text that fails to convey its purpose](/docs/assets/images/link-dont-2.png) | ![Link with clear language that conveys its purpose](/docs/assets/images/link-do-2.png)                                                  |
| Avoid vague link text.                                                                  | Use descriptive language that provides context to what is being linked. Use inline links with text that provides additional information. |

## Implementation

[Interactive component examples](https://codesandbox.io/s/link-sample-371wey?file=/index.html)

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

### Basic Link (With Href Attribute)

```html
<vscode-link href="#">Link Text</vscode-link>
```

### Inline Link

```html
<p>An <vscode-link href="#">inline link</vscode-link> that is a part of a sentence.</p>
```
