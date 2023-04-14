# Visual Studio Code Progress Ring

The `vscode-progress-ring` component is used to indicate an indeterminate loading state.

![Progress ring hero](/docs/assets/images/progress-ring-hero.png)

## Usage

| ❌ Don't                                                                                                           | ✅ Do                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| ![Progress ring showing indicating a user progress's in a workflow ](/docs/assets/images/progress-ring-dont-1.png) | ![Image placeholder](/docs/assets/images/progress-ring-do-1.png)                                        |
| Don't use a Progress Ring to indicate user progress on a multi-step task.                                          | Indicate indeterminate progress while the extension waits for something to load or to finish executing. |

| ❌ Don't                                                                               | ✅ Do                                                                                                                         |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![Two progress rings in close proximity](/docs/assets/images/progress-ring-dont-2.png) | ![Two progress rings in distinct sections](/docs/assets/images/progress-ring-do-2.png)                                        |
| Don't use multiple Progress Rings in close proximity.                                  | Use a single Progress Ring in a view. If multiple must be used, ensure they are in clearly defined sections of the extension. |

## Implementation

[Interactive component examples](https://codesandbox.io/s/progress-ring-sample-n94o56?file=/index.html)

### Attributes

None

### Basic Progress Ring

The progress ring displays a looping animation to indicate an indeterminate state where the wait time is unspecified.

```html
<vscode-progress-ring></vscode-progress-ring>
```
