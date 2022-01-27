# Visual Studio Code Radio Group

The `vscode-radio-group` is a web component implementation of a [radio group](https://w3c.github.io/aria-practices/#radiobutton).

![Radio group hero](/docs/assets/radio-hero.png)

While any DOM content is permissible as a child of the `vscode-radio-group`, only `vscode-radio` content and slotted content with a role of `radio` will receive keyboard support.

## Usage

| ❌ Don't                                                                                        | ✅ Do                                                                   |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png)                                          | ![Image placeholder](/docs/assets/img-placeholder.png)                  |
| Don't use radio buttons when more than one selection is possible. Try using checkboxes instead. | Use radio groups for options that feature a single selection at a time. |

| ❌ Don't                                               | ✅ Do                                                                        |
| ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| ![Image placeholder](/docs/assets/img-placeholder.png) | ![Image placeholder](/docs/assets/img-placeholder.png)                       |
| Avoid using horizontal radio group layouts.            | Arrange radio groups vertically to make it easy to scan and compare options. |

| ❌ Don't                                               | ✅ Do                                                  |
| ------------------------------------------------------ | ------------------------------------------------------ |
| ![Image placeholder](/docs/assets/img-placeholder.png) | ![Image placeholder](/docs/assets/img-placeholder.png) |
| Don't use long blocks of text.                         | Use concise language to describe each option.          |

## Implementation

## Attributes

| Attribute     | Type    | Description                                                                                  |
| ------------- | ------- | -------------------------------------------------------------------------------------------- |
| `disabled`    | boolean | Disables the radio group and child radios.                                                   |
| `name`        | string  | The name of the radio group. This will also set the name value for all child radio elements. |
| `orientation` | string  | The orientation of the group. Options: `horiztonal`, `vertical`.                             |
| `readonly`    | boolean | When true, the child radios will be immutable by user interaction.                           |

### Basic Usage

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-radio-group--default)

```html
<vscode-radio-group>
	<label slot="label">Radio Group Label</label>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
</vscode-radio-group>
```

### Disabled Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-radio-group--with-disabled)

```html
<vscode-radio-group disabled>
	<label slot="label">Radio Group Label</label>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
</vscode-radio-group>
```

### Name Attribute

```html
<vscode-radio-group name="example-radio-group">
	<label slot="label">Radio Group Label</label>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
</vscode-radio-group>
```

### Orientation Attribute

If the orientation attribute is not set, the default orientation is `horizontal`.

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-radio-group--with-vertical-orientation)

```html
<vscode-radio-group orientation="vertical">
	<label slot="label">Radio Group Label</label>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
</vscode-radio-group>

<vscode-radio-group orientation="horizontal">
	<label slot="label">Radio Group Label</label>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
</vscode-radio-group>
```

### Read Only Attribute

[Interactive Storybook Example](https://microsoft.github.io/vscode-webview-ui-toolkit/?path=/story/library-radio-group--with-read-only)

```html
<vscode-radio-group readonly>
	<label slot="label">Radio Group Label</label>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
	<vscode-radio>Radio Label</vscode-radio>
</vscode-radio-group>
```
