# Visual Studio Code Panels

The `vscode-panels` component is a web component implementation of a [tab](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role). The component is created using three components that work together to interchangably display different content:

-   `<vscode-panels>`: The top level container element.
-   `<vscode-panel-tab>`: Renders the panel tab that will be associated with a panel view.
-   `<vscode-panel-view>`: The container element that will hold content associated with a given tab.

## Panels Attributes

| Attribute  | Type   | Description                     |
| ---------- | ------ | ------------------------------- |
| `activeid` | string | The id of the active panel tab. |

## Panel Tab Attributes

| Attribute  | Type    | Description                                               |
| ---------- | ------- | --------------------------------------------------------- |
| `disabled` | boolean | When true, the tab will be immutable by user interaction. |

## Panel View Attributes

None

## Usage

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-panels--default)

```html
<vscode-panels>
	<vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
	<vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
	<vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
	<vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
	<vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
	<vscode-panel-view id="view-2">Output content.</vscode-panel-view>
	<vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
	<vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
</vscode-panels>
```

### Active ID Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-panels--with-active-tab)

```html
<vscode-panels activeid="tab-4">
	<vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
	<vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
	<vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
	<vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
	<vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
	<vscode-panel-view id="view-2">Output content.</vscode-panel-view>
	<vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
	<vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
</vscode-panels>
```

### Disabled Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-panels--with-disabled)

```html
<vscode-panels>
	<vscode-panel-tab id="tab-1" disabled>PROBLEMS</vscode-panel-tab>
	<vscode-panel-tab id="tab-2" disabled>OUTPUT</vscode-panel-tab>
	<vscode-panel-tab id="tab-3" disabled>DEBUG CONSOLE</vscode-panel-tab>
	<vscode-panel-tab id="tab-4" disabled>TERMINAL</vscode-panel-tab>
	<vscode-panel-view id="view-1"> Problems Content </vscode-panel-view>
	<vscode-panel-view id="view-2"> Output Content </vscode-panel-view>
	<vscode-panel-view id="view-3"> Debug Console Content </vscode-panel-view>
	<vscode-panel-view id="view-4"> Terminal Content </vscode-panel-view>
</vscode-panels>
```

### With Visual Studio Code Badge

In addition to text, a Visual Studio Code Badge can be used in a panel tab to highlight an item, attract attention, and/or flag status.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-panels--with-custom-tab-icons)

```html
<vscode-panels>
	<vscode-panel-tab id="tab-1">
		PROBLEMS
		<vscode-badge appearance="secondary">1</vscode-badge>
	</vscode-panel-tab>
	<vscode-panel-tab id="tab-2">
		OUTPUT
		<vscode-badge appearance="secondary">1</vscode-badge>
	</vscode-panel-tab>
	<vscode-panel-tab id="tab-3">
		DEBUG CONSOLE
		<vscode-badge appearance="secondary">1</vscode-badge>
	</vscode-panel-tab>
	<vscode-panel-tab id="tab-4">
		TERMINAL
		<vscode-badge appearance="secondary">1</vscode-badge>
	</vscode-panel-tab>
	<vscode-panel-view id="view-1"> Problems Content </vscode-panel-view>
	<vscode-panel-view id="view-2"> Output Content </vscode-panel-view>
	<vscode-panel-view id="view-3"> Debug Console Content </vscode-panel-view>
	<vscode-panel-view id="view-4"> Terminal Content </vscode-panel-view>
</vscode-panels>
```

### Complex Content

A `vscode-panel-view` can also contain any valid HTML.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-panels--with-complex-panel-view-content)

```html
<vscode-panels>
	<vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
	<vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
	<vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
	<vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
	<vscode-panel-view id="view-1">
		<section style="display: flex; flex-direction: column; width: 100%;">
			<h1 style="margin-top: 0;">Smoothie Maker 🍓</h1>
			<vscode-checkbox>Apples</vscode-checkbox>
			<vscode-checkbox>Oranges</vscode-checkbox>
			<vscode-checkbox>Grapes</vscode-checkbox>
			<vscode-checkbox disabled>Blueberries</vscode-checkbox>
			<vscode-checkbox>Pineapple</vscode-checkbox>
			<vscode-checkbox>Mango</vscode-checkbox>
			<vscode-checkbox>Lemon</vscode-checkbox>
			<vscode-button>Make Smoothie!</vscode-button>
		</section>
	</vscode-panel-view>
	<vscode-panel-view id="view-2">
		... Insert Complex Content ...
	</vscode-panel-view>
	<vscode-panel-view id="view-3">
		... Insert Complex Content ...
	</vscode-panel-view>
	<vscode-panel-view id="view-4">
		... Insert Complex Content ...
	</vscode-panel-view>
</vscode-panels>
```
