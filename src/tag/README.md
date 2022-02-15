# Visual Studio Code Tag

The `vscode-tag` component is used to label an item, attract attention, and/or flag status.

![Tag hero](/docs/assets/images/tag-hero.png)

## Usage

| ❌ Don't                                                                                                                                                  | ✅ Do                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| ![A tag incorrectly displaying numbers](/docs/assets/images/tag-dont-1.png)                                                                               | ![A tag using a text label](/docs/assets/images/tag-do-1.png)      |
| Don't use tags to display numbers. If a component that highlights an item with a number is desired, see the [vscode-badge](../badge/README.md) component. | Use tags as text labels to indicate purpose or status for content. |

## Implementation

### Attributes

None

### Basic Tag

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-tag--default)

```html
<vscode-tag>Tag Text</vscode-tag>
```
