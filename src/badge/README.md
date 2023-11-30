# Visual Studio Code Badge

The `vscode-badge` component is used to highlight an item, attract attention, and/or flag status.

![Badge hero](/docs/assets/images/badge-hero.png)

## Usage

| ❌ Don't                                                                                           | ✅ Do                                                          |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| ![Badge with text value](/docs/assets/images/badge-dont-1.png)                                     | ![Badge with number value](/docs/assets/images/badge-do-1.png) |
| Don't use a badge to display text content. Use a [vscode-tag](../tag/README.md) component instead. | Use a badge to display numbers.                                |

| ❌ Don't                                                                 | ✅ Do                                                                                      |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| ![Badge used to display and error](/docs/assets/images/badge-dont-2.png) | ![Badge showing the number of items in a history view](/docs/assets/images/badge-do-2.png) |
| Don't use a badge to indicate an error.                                  | Use badges to indicate the numbered state of an element.                                   |

| ❌ Don't                                                                | ✅ Do                                                                            |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ![Multiple badges on one element](/docs/assets/images/badge-dont-3.png) | ![One badge used for each section in a view](/docs/assets/images/badge-do-3.png) |
| Don't use more than one badge on a single element.                      | Ensure badges are clearly associated with their parent element.                  |

## Implementation

[Interactive component examples](https://codesandbox.io/s/badge-sample-y8386m?file=/index.html)

### Attributes

None

### Basic Badge

```html
<vscode-badge>1</vscode-badge>
```
