# VSCode Breadcrumb

The `vscode-breadcrumb` is used as a navigational aid, allowing users to maintain awareness of their navigated path within an extension.

## Attributes

None

## Usage

The `vscode-breadcrumb` component must be used in tandem with the `vscode-breadcrumb-item` component.

[Interactive Storybook Example](http://localhost:6006/?path=/story/library-breadcrumb--default)

```html
<vscode-breadcrumb>
	<vscode-breadcrumb-item href="#">src</vscode-breadcrumb-item>
	<vscode-breadcrumb-item href="#">components</vscode-breadcrumb-item>
	<vscode-breadcrumb-item>index.ts</vscode-breadcrumb-item>
</vscode-breadcrumb>
```
