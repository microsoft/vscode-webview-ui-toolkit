# VSCode Progress Ring

The `vscode-progress-ring` component is used to indicate the length of time a process will take.

This may either be a determinate state in which the progress is a percentage of the total time needed to complete the task or as an indeterminate state where the wait time is unspecified.

The `vscode-progress-ring` renders a circular visual appearance for progress state. If a linear visual appearance is needed, use the `vscode-progress-bar`.

## Attributes

| Attribute | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| `value`   | string  | The current value of the progress ring. |
| `min`     | boolean | The minimum progress ring value.        |
| `max`     | boolean | The maximum progress ring value.        |

## Usage

### Basic Usage

The basic usage will display a looping animation to indicate an indeterminate state where the wait time is unspecified.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-progress-ring--default)

```html
<vscode-progress-ring></vscode-progress-ring>
```

### Value Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-progress-ring--with-value)

```html
<vscode-progress-ring value="75"></vscode-progress-ring>
```

### Min Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-progress-ring--with-value)

```html
<vscode-progress-ring min="0"></vscode-progress-ring>
```

### Max Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-progress-ring--with-value)

```html
<vscode-progress-ring max="100"></vscode-progress-ring>
```
