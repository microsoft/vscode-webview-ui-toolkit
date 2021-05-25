# VS Code Badge

The `vscode-badge` component is used to highlight an item, attract attention, and/or flag status.

## Attributes

| Attribute  | Type    | Description                                                |
| ---------- | ------- | ---------------------------------------------------------- |
| `circular` | boolean | Indicates the element should be circular.                  |
| `color`    | string  | Indicates the badge should have a custom foreground style. |
| `fill`     | string  | Indicates the badge should have a custom background style. |

## Usage

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-badge--default)

```html
<vscode-badge>Badge Text</vscode-badge>
```

### Circular Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-badge--circular)

```html
<vscode-badge circular="true">1</vscode-badge>
```

### Fill & Color Attributes

The `fill` and `color` attributes expose the ability to set a custom background and foreground color on the badge component. These attributes accept the name of a _developer-defined CSS variable_ referencing a color string.

When defining CSS variables the following formats must be used:

-   `--badge-fill-{fill-name-of-your-choice}`
-   `--badge-color-{color-name-of-your-choice}`

From there, the `fill` and `color` attributes are set using the `{name-of-your-choice}`, like so:

-   `fill="{fill-name-of-your-choice}"`
-   `color="{color-name-of-your-choice}"`

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-badge--with-fill)

```css live
vscode-badge {
	--badge-fill-primary: #007aac;
	--badge-fill-secondary: rgb(77, 77, 77);
	--badge-fill-transparent: transparent;
	--badge-color-light: #ffffff;
	--badge-color-dark: hsl(0, 0, 0);
}
```

```html
<vscode-badge fill="primary" color="dark">Badge Text</vscode-badge>
<vscode-badge fill="secondary" color="light">Badge Text</vscode-badge>
```
