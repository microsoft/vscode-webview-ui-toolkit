# VSCode Breadcrumb Item

The `vscode-breadcrumb-item` is a component meant to be used with `vscode-breadcrumb`.

## Attributes

| Attribute | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| href      | string | The URL the hyperlink references. |

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb-item--default)

```html
<vscode-breadcrumb-item>Breadcrumb Item Label</vscode-breadcrumb-item>
```

### Href Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb-item--with-link)

```html
<vscode-breadcrumb-item href="#">Breadcrumb Item Label</vscode-breadcrumb-item>
```

### Custom Element

The Breadcrumb Item usually contains text, but can also contain any valid HTML, such as a `<vscode-button>`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb-item--with-custom-element)

```html
<vscode-breadcrumb-item href="#">
	<vscode-button>Button Element</vscode-button>
</vscode-breadcrumb-item>
```

### Custom Separator

The default separator is a `/` but it can customized by adding an element with the attribute `slot="separator"`, such as an SVG icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb-item--with-custom-separator)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb-item href="#">
	Breadcrumb Item Label
	<svg slot="separator" class="codicon codicon-chevron-right"></svg>
</vscode-breadcrumb-item>
```

### Start Icon

An icon can be added to the left of Breadcrumb Item text by adding an element with the attribute `slot="start"`, such as an SVG icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb-item--with-start-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb-item href="#">
	Breadcrumb Item Label
	<svg slot="start" class="codicon codicon-symbol-method"></svg>
</vscode-breadcrumb-item>
```

### End Icon

An icon can be added to the right of Breadcrumb Item text by adding an element with the attribute `slot="end"`, such as an SVG icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb-item--with-end-icon)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb-item href="#">
	Breadcrumb Item Label
	<svg slot="end" class="codicon codicon-symbol-method"></svg>
</vscode-breadcrumb-item>
```
