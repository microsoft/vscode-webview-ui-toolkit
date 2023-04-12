# Visual Studio Code Dropdown

The `vscode-dropdown` is a web component implementation of a [select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

![Dropdown hero](/docs/assets/images/dropdown-hero.png)

## Usage

| ❌ Don't                                                                                                                                                                 | ✅ Do                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Dropdown with two options](/docs/assets/images/dropdown-dont-1.png)                                                                                                    | ![Dropdown with many options](/docs/assets/images/dropdown-do-1.png) |
| Don't use a dropdown for selections with with less than three options. Try a [checkbox group](../checkbox/README.md) or [radio group](../radio-group/README.md) instead. | Use dropdowns for selections with many unique options.               |

| ❌ Don't                                                                      | ✅ Do                                                                        |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ![Dropdown with overflowing options](/docs/assets/images/dropdown-dont-2.png) | ![Dropdown options with short labels](/docs/assets/images/dropdown-do-2.png) |
| Avoid overflowing text in dropdown list options.                              | Use concise language to describe a selection.                                |

| ❌ Don't                                                                                      | ✅ Do                                                                                                                   |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![Dropdown without label with no supporting context](/docs/assets/images/dropdown-dont-3.png) | ![Dropdown without label with supporting context](/docs/assets/images/dropdown-do-3.png)                                |
| Don't use a dropdown without a descriptive label without supporting context.                  | Use dropdowns without labels sparingly in situations where its purpose can easily be identified or if space is limited. |

## Implementation

The `vscode-dropdown` component must be used with the `vscode-option` component.

[Interactive component examples](https://codesandbox.io/s/dropdown-sample-j2ozdp?file=/index.html)

### Attributes

| Attribute  | Type    | Description                                                                                  |
| ---------- | ------- | -------------------------------------------------------------------------------------------- |
| `disabled` | boolean | Disables the dropdown and child options.                                                     |
| `open`     | boolean | If true, toggles the dropdown to the open position.                                          |
| `position` | string  | Reflects the placement for the listbox when the dropdown is open. Options: `above`, `below`. |

### Basic Dropdown

```html
<vscode-dropdown>
  <vscode-option>Option Label #1</vscode-option>
  <vscode-option>Option Label #2</vscode-option>
  <vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

### With Label

_Note: There are [long term plans](https://github.com/microsoft/vscode-webview-ui-toolkit/issues/461#issuecomment-1478408942) to better support labels in dropdown components, but in the meantime the below markup and styling will create a label that adheres to the VS Code design language._

```html
<div class="dropdown-container">
  <label for="my-dropdown">Choose an option:</label>
  <vscode-dropdown id="my-dropdown">
    <vscode-option>Option Label #1</vscode-option>
    <vscode-option>Option Label #2</vscode-option>
    <vscode-option>Option Label #3</vscode-option>
  </vscode-dropdown>
</div>
```

```css
.dropdown-container {
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.dropdown-container label {
  display: block;
  color: var(--vscode-foreground);
  cursor: pointer;
  font-size: var(--vscode-font-size);
  line-height: normal;
  margin-bottom: 2px;
}
```

### Disabled Attribute

```html
<vscode-dropdown disabled>
  <vscode-option>Option Label #1</vscode-option>
  <vscode-option>Option Label #2</vscode-option>
  <vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

### Open Attribute

```html
<vscode-dropdown open>
  <vscode-option>Option Label #1</vscode-option>
  <vscode-option>Option Label #2</vscode-option>
  <vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

### Position Attribute

```html
<vscode-dropdown position="above">
  <vscode-option>Option Label #1</vscode-option>
  <vscode-option>Option Label #2</vscode-option>
  <vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

```html
<vscode-dropdown position="below">
  <vscode-option>Option Label #1</vscode-option>
  <vscode-option>Option Label #2</vscode-option>
  <vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```

### Custom Indicator

The default indicator is a downward facing chevron, but it can customized by adding an element with the attribute `slot="indicator"`.

```html
<!-- Note: Using Visual Studio Code Codicon Library -->

<vscode-dropdown>
  <span slot="indicator" class="codicon codicon-settings"></span>
  <vscode-option>Option Label #1</vscode-option>
  <vscode-option>Option Label #2</vscode-option>
  <vscode-option>Option Label #3</vscode-option>
</vscode-dropdown>
```
