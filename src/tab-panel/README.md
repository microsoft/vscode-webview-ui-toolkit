# VS Code Tab Panel

The `vscode-tab-panel` is one part of three components that make up a `tabs` component that can interchangably display different content.

## Attributes

None

## Usage

The `vscode-tab-panel` component must be used in tandem with the `vscode-tab` and `vscode-tabs` components. See the documentation for `vscode-tabs` to see how all the components go together.

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-tabs--default)

```html
<vscode-tab-panel>Tab Panel Content</vscode-tab-panel>
```

### Complex Content

A `vscode-tab-panel` can also contain any valid HTML.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-tabs--with-complex-panel-content)

```html
<vscode-tab-panel>
	<section style="display: flex; flex-direction: column; width: 100%;">
		<h1 style="margin-top: 0;">Smoothie Maker 🍓</h1>
		<vscode-checkbox>Apples</vscode-checkbox>
		<vscode-checkbox>Oranges</vscode-checkbox>
		<vscode-checkbox>Grapes</vscode-checkbox>
		<vscode-checkbox disabled>Blueberries</vscode-checkbox>
		<vscode-checkbox>Pineapple</vscode-checkbox>
		<vscode-checkbox>Mango</vscode-checkbox>
		<vscode-checkbox>Lemon</vscode-checkbox>
		<vscode-button style="margin-top: 1rem;">Make Smoothie!</vscode-button>
	</section>
</vscode-tab-panel>
```
