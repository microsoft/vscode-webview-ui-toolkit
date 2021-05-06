# VS Code Panels

The `vscode-panels` component is a web component implementation of a [tab](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role). The component is created using three components that work together to interchangably display different content:

-   `<vscode-panels>`: The top level container element.
-   `<vscode-panel-tab>`: Renders the panel tab that will be associated with a panel view.
-   `<vscode-panel-view>`: The container element that will hold content associated with a given tab.

## Panels Attributes

| Attribute         | Type    | Description                                  |
| ----------------- | ------- | -------------------------------------------- |
| `activeid`        | string  | The id of the active panel tab.              |
| `activeindicator` | boolean | Whether or not to show the active indicator. |

## Panel Tab Attributes

| Attribute  | Type    | Description                                               |
| ---------- | ------- | --------------------------------------------------------- |
| `disabled` | boolean | When true, the tab will be immutable by user interaction. |

## Panel View Attributes

None

## Usage

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-panels--default)

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

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-panels--with-active-tab)

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

### Active Indicator Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-panels--with-no-active-indicator)

```html
<vscode-panels activeindicator="false">
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

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-panels--with-disabled)

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

### Custom Icon

Instead of text, an icon can be used as the tab title.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-panels--with-custom-tab-icons)

```html
<!-- Note: Using VS Code Codicon Library -->

<vscode-panels>
	<vscode-panel-tab id="tab-1">
		<span class="codicon codicon-heart"></span>
	</vscode-panel-tab>
	<vscode-panel-tab id="tab-2">
		<span class="codicon codicon-database"></span>
	</vscode-panel-tab>
	<vscode-panel-tab id="tab-3">
		<span class="codicon codicon-check"></span>
	</vscode-panel-tab>
	<vscode-panel-tab id="tab-4">
		<span class="codicon codicon-add"></span>
	</vscode-panel-tab>
	<vscode-panel-view id="view-1"> Tab Panel Content </vscode-panel-view>
	<vscode-panel-view id="view-2"> Tab Panel Content </vscode-panel-view>
	<vscode-panel-view id="view-3"> Tab Panel Content </vscode-panel-view>
	<vscode-panel-view id="view-4"> Tab Panel Content </vscode-panel-view>
</vscode-panels>
```

### Complex Content

A `vscode-tab-panel` can also contain any valid HTML.

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-panels--with-complex-panel-view-content)

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
