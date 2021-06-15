# VS Code Breadcrumb Item

The `vscode-breadcrumb-item` is a component meant to be used with `vscode-breadcrumb`.

## Attributes

| Attribute | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| href      | string | The URL the hyperlink references. |

## Usage

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-breadcrumb-item--default)

```html
<vscode-breadcrumb-item>Breadcrumb Item Label</vscode-breadcrumb-item>
```

### Href Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-breadcrumb-item--with-link)

```html
<vscode-breadcrumb-item href="#">Breadcrumb Item Label</vscode-breadcrumb-item>
```

### Custom Separator

The default separator is a `/` but it can customized by adding an element with the attribute `slot="separator"`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-breadcrumb-item--with-custom-separator)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-breadcrumb-item href="#">
	Breadcrumb Item Label
	<span slot="separator" class="codicon codicon-chevron-right"></span>
</vscode-breadcrumb-item>
```

### Start Icon

An icon can be added to the left of Breadcrumb Item text by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-breadcrumb-item--with-start-icon)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-breadcrumb-item href="#">
	Breadcrumb Item Label
	<span slot="start" class="codicon codicon-symbol-method"></span>
</vscode-breadcrumb-item>
```

### End Icon

An icon can be added to the right of Breadcrumb Item text by adding an element with the attribute `slot="end"`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-toolkit/?path=/story/library-breadcrumb-item--with-end-icon)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-breadcrumb-item href="#">
	Breadcrumb Item Label
	<span slot="end" class="codicon codicon-symbol-method"></span>
</vscode-breadcrumb-item>
```
