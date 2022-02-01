# Visual Studio Code Progress Ring

The `vscode-progress-ring` component is used to indicate an indeterminate loading state.

![Progress ring hero](/docs/assets/images/progress-ring-hero.png)

## Usage

| ❌ Don't                                                                  | ✅ Do                                                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/images/img-placeholder.png)             | ![Image placeholder](/docs/assets/images/img-placeholder.png)                                           |
| Don't use a Progress Ring to indicate user progress on a multi-step task. | Indicate indeterminate progress while the extension waits for something to load or to finish executing. |

| ❌ Don't                                                      | ✅ Do                                                                                                                         |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/images/img-placeholder.png) | ![Image placeholder](/docs/assets/images/img-placeholder.png)                                                                 |
| Don't use multiple Progress Rings in close proximity.         | Use a single Progress Ring in a view. If multiple must be used, ensure they are in clearly defined sections of the extension. |

## Implementation

### Attributes

None

### Basic Usage

The progress ring displays a looping animation to indicate an indeterminate state where the wait time is unspecified.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-progress-ring--default)

```html
<vscode-progress-ring></vscode-progress-ring>
```
