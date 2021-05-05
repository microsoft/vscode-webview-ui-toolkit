# VS Code Panel

The `vscode-panel` component is a web component implementation of a [tab](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role). It is one part of three components that make up a `panel` component that can interchangably display different content.

## Attributes

| Attribute         | Type    | Description                                  |
| ----------------- | ------- | -------------------------------------------- |
| `activeid`        | string  | The id of the active tab.                    |
| `activeindicator` | boolean | Whether or not to show the active indicator. |

## Usage

The `vscode-panels` component must be used in tandem with the `vscode-tab` and `vscode-panel` components.

### Basic Usage

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-tabs--default)

```html
<vscode-tabs>
	<vscode-tab id="tab-1">PROBLEMS</vscode-tab>
	<vscode-tab id="tab-2">OUTPUT</vscode-tab>
	<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>
	<vscode-tab id="tab-4">TERMINAL</vscode-tab>
	<vscode-tab-panel id="tab-panel-1">Problems content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-2">Output content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-3">Debug content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-4">Terminal content.</vscode-tab-panel>
</vscode-tabs>
```

### Active ID Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-tabs--with-active-tab)

```html
<vscode-tabs activeid="tab-4">
	<vscode-tab id="tab-1">PROBLEMS</vscode-tab>
	<vscode-tab id="tab-2">OUTPUT</vscode-tab>
	<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>
	<vscode-tab id="tab-4">TERMINAL</vscode-tab>
	<vscode-tab-panel id="tab-panel-1">Problems content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-2">Output content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-3">Debug content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-4">Terminal content.</vscode-tab-panel>
</vscode-tabs>
```

### Active Indicator Attribute

[Interactive Storybook Example](https://mttallac.azurewebsites.net/?path=/story/library-tabs--with-no-active-indicator)

```html
<vscode-tabs activeindicator="false">
	<vscode-tab id="tab-1">PROBLEMS</vscode-tab>
	<vscode-tab id="tab-2">OUTPUT</vscode-tab>
	<vscode-tab id="tab-3">DEBUG CONSOLE</vscode-tab>
	<vscode-tab id="tab-4">TERMINAL</vscode-tab>
	<vscode-tab-panel id="tab-panel-1">Problems content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-2">Output content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-3">Debug content.</vscode-tab-panel>
	<vscode-tab-panel id="tab-panel-4">Terminal content.</vscode-tab-panel>
</vscode-tabs>
```
