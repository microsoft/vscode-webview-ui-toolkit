# Visual Studio Code React Toolkit Components

In addition to the web components that the Webview UI Toolkit for Visual Studio Code provides, the toolkit also provides a set of React components that can be used to build webview-based extension UIs.

These components are actually built with the same exact web components that the toolkit ships under the hood, but they are wrapped in a React component using the [`@microsoft/fast-react-wrapper`](https://www.npmjs.com/package/@microsoft/fast-react-wrapper). You can find the wrapping code in the `src/react/index.ts` file.

## Usage 

To use the React components in your extension, simply install the `@vscode/webview-ui-toolkit` package and import the components using the following syntax:

```ts
import { VSCodeButton } from '@vscode/webview-ui-toolkit/react';
```

You should be able to (for the most part) follow the same usage pattern and attributes as the web components. See our [component documentation](../../docs/components.md) for more details.

## Some exceptions

There are still some exceptions to the general usage patterns when using the React components. These are listed below and will be updated as needed.

### Use `onInput` instead of `onChange` to handle keystrokes

Due to the fact that the toolkit React components are built with web components under the hood, it means that input components like `VSCodeTextField` or `VSCodeTextArea` follow the native browser `change` and `input` event model. This means the `onChange` event is fired focus is blurred away from the input element and `onInput` is fired on every keystroke. _Note that this exception is the result of the React team deciding to [override native browser behavior](https://reactjs.org/docs/dom-elements.html#onchange)._

As an example, if you would like to update the value of a text field on every keystroke, the `onInput` should be used instead of `onChange`.

```tsx
import { VSCodeTextField } from '@vscode/webview-ui-toolkit/react';

function SomeComponent() {
  const [value, setValue] = useState('');
  
  return <VSCodeTextField value={value} onInput={e => setValue(e.target.value)} />
}
```

### Some component attributes must use enums at this time

At this time there is a slightly less convenient way of needing to define a handful of component attributes with enums instead of string values. There is an [upstream issue](https://github.com/microsoft/fast/issues/5494) open with the goal of addressing this. However, for the time being, if you use any of the following component attributes you will need to import an enum to use them.

- Data grid `cell-type` attr ==> import `DataGridCellTypes` enum
- Data grid `row-type` attr ==> import `DataGridRowTypes` enum
- Data grid `generate-header` attr ==> import `GenerateHeaderOptions` enum
- Divider `role` attr ==> import `DividerRole` enum
- Dropdown `position` attr ==> import `DropdownPosition` enum
- Radio group `orientation` attr ==> import `RadioGroupOrientation` enum
- Text area `resize` attr ==> import `RadioGroupOrientation` enum
- Text field `type` attr ==> import `TextFieldType` enum

Here's an example of all of them in use:

```js
import {
  DataGridCellTypes,
  DataGridRowTypes,
  DividerRole,
  DropdownPosition,
  GenerateHeaderOptions,
  RadioGroupOrientation,
  TextAreaResize,
  TextFieldType,
  VSCodeDataGrid,
  VSCodeDataGridCell,
  VSCodeDataGridRow,
  VSCodeDivider,
  VSCodeDropdown,
  VSCodeOption,
  VSCodeRadio,
  VSCodeRadioGroup,
  VSCodeTextArea,
  VSCodeTextField,
} from "@vscode/webview-ui-toolkit/react";

function App() {
  return (
    <main>
      // Data grid example code
      <VSCodeDataGrid generate-header={GenerateHeaderOptions.none}>
        <VSCodeDataGridRow row-type={DataGridRowTypes.header}>
          <VSCodeDataGridCell cell-type={DataGridCellTypes.columnHeader} grid-column="1">
            Header 1
          </VSCodeDataGridCell>
          <VSCodeDataGridCell cell-type={DataGridCellTypes.columnHeader} grid-column="2">
            Header 2
          </VSCodeDataGridCell>
        </VSCodeDataGridRow>
        <VSCodeDataGridRow>
          <VSCodeDataGridCell grid-column="1">Cell Data</VSCodeDataGridCell>
          <VSCodeDataGridCell grid-column="2">Cell Data</VSCodeDataGridCell>
        </VSCodeDataGridRow>
      </VSCodeDataGrid>

      // Divider example code
      <VSCodeDivider role={DividerRole.separator}></VSCodeDivider>

      // Dropdown example code
      <VSCodeDropdown position={DropdownPosition.below} open>
        <VSCodeOption>Item 1</VSCodeOption>
        <VSCodeOption>Item 2</VSCodeOption>
        <VSCodeOption>Item 3</VSCodeOption>
      </VSCodeDropdown>

      // Radio example code
      <VSCodeRadioGroup orientation={RadioGroupOrientation.vertical}>
        <label slot="label">Radio Group Label</label>
        <VSCodeRadio>Radio Label</VSCodeRadio>
        <VSCodeRadio>Radio Label</VSCodeRadio>
      </VSCodeRadioGroup>

      // Text area example code
      <VSCodeTextArea resize={TextAreaResize.both}>Text Area Label</VSCodeTextArea>

      // Text field example code
      <VSCodeTextField type={TextFieldType.password}>Text Field Label</VSCodeTextField>
    </main>
  );
}

export default App;
```