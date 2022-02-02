# Visual Studio Code Divider

The `vscode-divider` is a web component implementation of a [horiztonal rule element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr).

![Divider hero](/docs/assets/images/divider-hero.png)

## Usage

| ❌ Don't                                                                             | ✅ Do                                                                                              |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| ![An editor panel divided into pseudo-views](/docs/assets/images/divider-dont-1.png) | ![A form with with multiple sections separated by a divider](/docs/assets/images/divider-do-1.png) |
| Don't use a divider to create pseudo-views within a webview.                         | Use dividers to create distinct sections of related content in a single view.                      |

| ❌ Don't                                                                           | ✅ Do                                                                          |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![A form with dividers between each input](/docs/assets/images/divider-dont-2.png) | ![A form with dividers between sections](/docs/assets/images/divider-do-2.png) |
| Don't split up related form elements with a divider.                               | Use a divider to separate multiple forms on the same page.                     |

## Attributes

| Attribute | Type   | Description                                    |
| --------- | ------ | ---------------------------------------------- |
| role      | string | Indicates the semantic meaning of the divider. |

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-divider--default)

```html
<vscode-divider></vscode-divider>
```

### Role Attribute

The role attribute determines the semantic meaning (or lack there of) of a Visual Studio Code Divider. The two options are `separator` and `presentation`.

The `separator` option is the default value and indicates that the divider semantically separates content.

The `presentation` option indicates that the divider has no semantic value and is for visual presentation only.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-divider--with-role)

```html
<!-- Indicates that the divider semantically separates content -->
<vscode-divider role="separator"></vscode-divider>

<!-- Indicates that the divider has no semantic value and is for visual presentation only -->
<vscode-divider role="presentation"></vscode-divider>
```
