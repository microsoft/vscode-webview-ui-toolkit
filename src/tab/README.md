# VS Code Tab

The `vscode-tab` is one part of three components that make up a `tabs` component that can interchangably display different content.

## Attributes

| Attribute  | Type    | Description                                               |
| ---------- | ------- | --------------------------------------------------------- |
| `disabled` | boolean | When true, the tab will be immutable by user interaction. |

## Usage

The `vscode-tab` component must be used in tandem with the `vscode-panel` and `vscode-tabs` components. See the documentation for `vscode-tabs` to see how all the components go together.

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-tabs--default)

```html
<vscode-tab>Tab Title</vscode-tab>
```

### Disabled Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-tabs--with-disabled)

```html
<vscode-tab disabled>Tab Title</vscode-tab>
```

### Custom Icon

Instead of text, an icon can be used as the tab title.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-tabs--with-custom-tab-icons)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-tab>
	<span class="codicon codicon-heart"></span>
</vscode-tab>
```
