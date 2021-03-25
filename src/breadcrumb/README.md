# VSCode Breadcrumb

The `vscode-breadcrumb` is used as a navigational aid, allowing users to maintain awareness of their navigated path within an extension.

## Attributes

None

## Usage

The `vscode-breadcrumb` component must be used with the `vscode-breadcrumb-item` component.

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb--default)

```html
<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">src</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">components</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">index.ts</vscode-breadcrumb-item>
</vscode-breadcrumb>
```

### Custom Elements

The Breadcrumb Item usually contains text, but can also contain any valid HTML, such as a `<vscode-button>`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb--with-custom-elements)

```html
<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">
		<vscode-button>src</vscode-button>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		<vscode-button>components</vscode-button>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		<vscode-button>index.ts</vscode-button>
	</vscode-breadcrumb-item>
</vscode-breadcrumb>
```

### Custom Separators

The default separator is a `/` but it can customized by adding an element with the attribute `slot="separator"`, such as an SVG icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb--with-custom-separators)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">
		src
		<svg slot="separator" class="codicon codicon-chevron-right"></svg>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		components
		<svg slot="separator" class="codicon codicon-chevron-right"></svg>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		index.ts
		<svg slot="separator" class="codicon codicon-chevron-right"></svg>
	</vscode-breadcrumb-item>
</vscode-breadcrumb>
```

### Start Icons

An icon can be added to the start of Breadcrumb Item by adding an element with the attribute `slot="start"`, such as an SVG icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb--with-start-icons)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">
		src
		<svg slot="start" class="codicon codicon-symbol-method"></svg>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		components
		<svg slot="start" class="codicon codicon-symbol-method"></svg>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		index.ts
		<svg slot="start" class="codicon codicon-symbol-method"></svg>
	</vscode-breadcrumb-item>
</vscode-breadcrumb>
```

### End Icons

An icon can be added to the end of Breadcrumb Item by adding an element with the attribute `slot="end"`, such as an SVG icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb--with-end-icons)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">
		src
		<svg slot="end" class="codicon codicon-symbol-method"></svg>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		components
		<svg slot="end" class="codicon codicon-symbol-method"></svg>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		index.ts
		<svg slot="end" class="codicon codicon-symbol-method"></svg>
	</vscode-breadcrumb-item>
</vscode-breadcrumb>
```
