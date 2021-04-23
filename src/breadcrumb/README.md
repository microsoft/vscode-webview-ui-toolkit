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

The default separator is a `/` but it can customized by adding an element with the attribute `slot="separator"`, such as an span icon.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb--with-custom-separators)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">
		src
		<span slot="separator" class="codicon codicon-chevron-right"></span>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		components
		<span slot="separator" class="codicon codicon-chevron-right"></span>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		index.ts
		<span slot="separator" class="codicon codicon-chevron-right"></span>
	</vscode-breadcrumb-item>
</vscode-breadcrumb>
```

### Start Icons

An icon can be added to the left of Breadcrumb Item text by adding an element with the attribute `slot="start"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb--with-start-icons)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">
		src
		<span slot="start" class="codicon codicon-symbol-method"></span>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		components
		<span slot="start" class="codicon codicon-symbol-method"></span>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		index.ts
		<span slot="start" class="codicon codicon-symbol-method"></span>
	</vscode-breadcrumb-item>
</vscode-breadcrumb>
```

### End Icons

An icon can be added to the right of Breadcrumb Item text by adding an element with the attribute `slot="end"`.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-breadcrumb--with-end-icons)

```html
<!-- Note: Using VSCode Codicon Library -->

<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">
		src
		<span slot="end" class="codicon codicon-symbol-method"></span>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		components
		<span slot="end" class="codicon codicon-symbol-method"></span>
	</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">
		index.ts
		<span slot="end" class="codicon codicon-symbol-method"></span>
	</vscode-breadcrumb-item>
</vscode-breadcrumb>
```
