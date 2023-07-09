# Visual Studio Code Data Grid

The `vscode-data-grid` enables developers to display data in a tabular layout.

![Data grid hero](/docs/assets/images/data-grid-hero.png)

The data grid is created using three components that work together:

- `<vscode-data-grid>`: The top level container element.
- `<vscode-data-grid-row>`: Displays a single row of data associated with a single record or a header row.
- `<vscode-data-grid-cell>`: Displays a single cell of data within a row.

## Usage

| ❌ Don't                                                                     | ✅ Do                                                                      |
| ---------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| ![Data grid used as a simple list](/docs/assets/images/data-grid-dont-1.png) | ![Data grid with a large data set](/docs/assets/images/data-grid-do-1.png) |
| Don't use a data grid in place of a basic list.                              | Use data grids to list complex data with secondary information.            |

| ❌ Don't                                                                    | ✅ Do                                                                                                                                                                                                           |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Data grid in a VS Code sidebar](/docs/assets/images/data-grid-dont-2.png) | ![Data grid in a VS Code editor panel](/docs/assets/images/data-grid-do-2.png)                                                                                                                                  |
| Avoid data grids in small containers if possible.                           | Place data grids in a main content area to display as much information as possible in one view. It's ok to use a data grid in a small container if only using 2-3 small columns that don't scroll horizontally. |

## Implementation

[Interactive component examples](https://codesandbox.io/s/data-grid-sample-vol4xv?file=/index.html)

### Data Grid Attributes

| Attribute               | Type   | Description                                                                            |
| ----------------------- | ------ | -------------------------------------------------------------------------------------- |
| `generate-header`       | string | The type of header row that should be generated. Options: `default`, `sticky`, `none`. |
| `grid-template-columns` | string | A string that gets applied to the `grid-template-columns` attribute of child rows.     |

### Data Grid Row Attributes

| Attribute               | Type   | Description                                                          |
| ----------------------- | ------ | -------------------------------------------------------------------- |
| `grid-template-columns` | string | A CSS Grid string that defines the column widths of a data grid row. |
| `row-type`              | string | The type of row. Options: `default`, `header`, `sticky-header`.      |

### Data Grid Cell Attributes

| Attribute     | Type   | Description                                           |
| ------------- | ------ | ----------------------------------------------------- |
| `cell-type`   | string | The type of cell. Options: `default`, `columnheader`. |
| `grid-column` | string | The column index of the cell.                         |

❗️❗️❗️ Important ❗️❗️❗️

An aria-label of "Data Grid" is automatically defined on all data grids so they are technically accessible out of the box. However, a descriptive and meaningful label that fits the use case or context of the data grid should always be defined to replace the default label so those viewing your data grid with a screen reader can better understand the meaning of the data.

For example, if you're using a data grid to display real-time earthquake data, adding an aria-label with the value "Real-Time Earthquakes" would be appropriate.

### Basic Data Grid

The recommended basic usage of the `vscode-data-grid` is to use JavaScript (or TypeScript) to programmatically populate the rows and cells of the grid using the `rowsData` property as shown below. _Notable exception: The `rowsData` property doesn't work at this time when using the React toolkit components –– see below for an alternative approach._

With that said, a data grid can still be created with HTML only (also shown below).

_Using HTML & JavaScript_

Note that when using this method of data grid creation, the header row is automatically generated based on the data passed to `rowsData`.

```html
<vscode-data-grid id="basic-grid" aria-label="Basic"></vscode-data-grid>
```

```javascript
// A row is automatically generated for each object in the rowsData array.
// A column is automatically generated for each key in the first object in the rowsData array.
document.getElementById("basic-grid").rowsData = [
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
];
```

_Using Only HTML_

This is the recommended way of creating data grids when using React.

Note: When defining data grids using only HTML, a header row must be manually defined (as demonstrated below).

Additionally, in previous versions of the toolkit (less than or equal to `v0.9.1`), an attribute of `generate-header="none"` needs to be applied to the `vscode-data-grid` component. This ensures that an extra empty header row is not automatically generated.

Starting in `v0.9.2`, however, this behavior has changed so a header row is not automatically generated when data grids are manually defined and the `generate-header="none"` attribute is no longer needed.

```html
<vscode-data-grid aria-label="Basic">
  <vscode-data-grid-row row-type="header">
    <vscode-data-grid-cell cell-type="columnheader" grid-column="1">Header 1</vscode-data-grid-cell>
    <vscode-data-grid-cell cell-type="columnheader" grid-column="2">Header 2</vscode-data-grid-cell>
    <vscode-data-grid-cell cell-type="columnheader" grid-column="3">Header 3</vscode-data-grid-cell>
    <vscode-data-grid-cell cell-type="columnheader" grid-column="4">Header 4</vscode-data-grid-cell>
  </vscode-data-grid-row>
  <vscode-data-grid-row>
    <vscode-data-grid-cell grid-column="1">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="2">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="3">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="4">Cell Data</vscode-data-grid-cell>
  </vscode-data-grid-row>
  <vscode-data-grid-row>
    <vscode-data-grid-cell grid-column="1">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="2">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="3">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="4">Cell Data</vscode-data-grid-cell>
  </vscode-data-grid-row>
  <vscode-data-grid-row>
    <vscode-data-grid-cell grid-column="1">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="2">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="3">Cell Data</vscode-data-grid-cell>
    <vscode-data-grid-cell grid-column="4">Cell Data</vscode-data-grid-cell>
  </vscode-data-grid-row>
</vscode-data-grid>
```

Here's a further example of how you might use React's templating syntax to programmatically generate data rows.

```jsx
import { VSCodeDataGrid, VSCodeDataGridRow, VSCodeDataGridCell } from "@vscode/webview-ui-toolkit/react";

function SomeComponent() {
  const rowData = [
    { cell1: "Cell Data", cell2: "Cell Data", cell3: "Cell Data", cell4: "Cell Data" },
    { cell1: "Cell Data", cell2: "Cell Data", cell3: "Cell Data", cell4: "Cell Data" },
    { cell1: "Cell Data", cell2: "Cell Data", cell3: "Cell Data", cell4: "Cell Data" },
  ];

  return (
    <VSCodeDataGrid>
      <VSCodeDataGridRow row-type="header">
        <VSCodeDataGridCell cell-type="columnheader" grid-column="1">
          A Custom Header Title
        </VSCodeDataGridCell>
        <VSCodeDataGridCell cell-type="columnheader" grid-column="2">
          Another Custom Title
        </VSCodeDataGridCell>
        <VSCodeDataGridCell cell-type="columnheader" grid-column="3">
          Title Is Custom
        </VSCodeDataGridCell>
        <VSCodeDataGridCell cell-type="columnheader" grid-column="4">
          Custom Title
        </VSCodeDataGridCell>
      </VSCodeDataGridRow>
      {rowData.map(row => (
        <VSCodeDataGridRow>
          <VSCodeDataGridCell grid-column="1">{row.cell1}</VSCodeDataGridCell>
          <VSCodeDataGridCell grid-column="2">{row.cell2}</VSCodeDataGridCell>
          <VSCodeDataGridCell grid-column="3">{row.cell3}</VSCodeDataGridCell>
          <VSCodeDataGridCell grid-column="4">{row.cell4}</VSCodeDataGridCell>
        </VSCodeDataGridRow>
      ))}
    </VSCodeDataGrid>
  );
}
```

### Generate Header Attribute

The `generate-header` attribute is applied to the `<vscode-data-grid>` component and can be used to automatically generate a header row when data is passed to the `rowsData` property in JavaScript.

There are three values that can be passed to the attribute:

- `default`: A default header row will be automatically generated. This is the default value if the `generate-header` is not defined on the component.
- `sticky`: A sticky header row will be automatically generated.
- `none`: No header row will be generated.

```html
<vscode-data-grid id="basic-grid" generate-header="default" aria-label="Default Header"></vscode-data-grid>
<vscode-data-grid id="basic-grid" generate-header="sticky" aria-label="Sticky Header"></vscode-data-grid>
<vscode-data-grid id="basic-grid" generate-header="none" aria-label="No Header"></vscode-data-grid>
```

```javascript
document.getElementById("basic-grid").rowsData = [
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
];
```

### Grid Template Columns Attribute

The `grid-template-columns` attribute can be applied to either the `<vscode-data-grid>` or `<vscode-data-grid-row>` component and can be used to define the width of each column in either all rows or a given row.

Each row of a data grid is rendered using CSS Grid layout. As a result, the value passed to the `grid-template-columns` attribute can be the same as the `grid-template-columns` CSS Grid property (i.e. `grid-template-columns="1fr 1fr 1fr 1fr"`).

Starting in toolkit `v0.9.2`, the data grid automatically sets the width of each column to `"1fr"` so they take equal width within the data grid container.

**Differences Between Components**

The primary difference between using the `grid-template-columns` attribute on the `<vscode-data-grid>` versus the `<vscode-data-grid-row>` is how the value of the attribute is applied.

When defined on a `<vscode-data-grid>` component, the value of the attribute is automatically applied to every child row inside the component.

When defined on a `<vscode-data-grid-row>` component, the value of the attribute is applied to only that row.

```html
<vscode-data-grid
  id="basic-grid"
  grid-template-columns="100px 10vw 3fr 30%"
  aria-label="Custom Column Widths"
></vscode-data-grid>
```

```javascript
document.getElementById("basic-grid").rowsData = [
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
  { Header1: "Cell Data", Header2: "Cell Data", Header3: "Cell Data", Header4: "Cell Data" },
];
```

### Row Type Attribute

The `row-type` attribute is used to define what type of row should be rendered. There are three values that can be passed to the attribute:

- `default`: A default row will be rendered. This is the default value if the `row-type` is not defined on the component.
- `header`: A header row will be rendered.
- `sticky`: A sticky header row will be rendered.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<vscode-data-grid-row row-type="default"></vscode-data-grid-row>
<vscode-data-grid-row row-type="header"></vscode-data-grid-row>
<vscode-data-grid-row row-type="sticky-header"></vscode-data-grid-row>
```

### Cell Type Attribute

The `cell-type` attribute is used to define what type of cell should be rendered. There are two values that can be passed to the attribute:

- `default`: A default cell will be rendered. This is the default value if the `cell-type` is not defined on the component.
- `columnheader`: A column header cell will be rendered.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<vscode-data-grid-cell cell-type="default"></vscode-data-grid-cell>
<vscode-data-grid-cell cell-type="columnheader"></vscode-data-grid-cell>
```

### Grid Column Attribute

The `grid-column` attribute is used to define the column index (i.e. the order) of a given cell inside a row.

**Usage Note**

Use this attribute when defining a data grid using only HTML. This attribute is automatically applied when rendering a data grid using JavaScript and the `rowsData` property.

```html
<vscode-data-grid-row>
  <vscode-data-grid-cell grid-column="1">Cell Data</vscode-data-grid-cell>
  <vscode-data-grid-cell grid-column="2">Cell Data</vscode-data-grid-cell>
  <vscode-data-grid-cell grid-column="3">Cell Data</vscode-data-grid-cell>
  <vscode-data-grid-cell grid-column="4">Cell Data</vscode-data-grid-cell>
</vscode-data-grid-row>
```

### Custom Column Titles

By default, when defining a data grid programmatically using the `rowsData` property in JavaScript, the key of each object in the given array is used as the header text for each column.

This behavior can be overridden, however, by defining a new array of objects that is passed to the `columnDefinitions` property.

The array should contain an object for each column in the data grid that contains the following:

**`columnDataKey` Property**

This should contain the key from the `rowsData` object (representing a specific column) that you want the new custom title to override.

**`title` Property**

This is where you define the custom title for a given column.

```html
<vscode-data-grid id="basic-grid" aria-label="Custom Column Titles"></vscode-data-grid>
```

```javascript
const basicGrid = document.getElementById("basic-grid");

// Populate grid with data
basicGrid.rowsData = [
  { ColumnKey1: "Cell Data", ColumnKey2: "Cell Data", ColumnKey3: "Cell Data", ColumnKey4: "Cell Data" },
  { ColumnKey1: "Cell Data", ColumnKey2: "Cell Data", ColumnKey3: "Cell Data", ColumnKey4: "Cell Data" },
  { ColumnKey1: "Cell Data", ColumnKey2: "Cell Data", ColumnKey3: "Cell Data", ColumnKey4: "Cell Data" },
];

// Add custom column titles to grid
basicGrid.columnDefinitions = [
  { columnDataKey: "ColumnKey1", title: "A Custom Header Title" },
  { columnDataKey: "ColumnKey2", title: "Another Custom Title" },
  { columnDataKey: "ColumnKey3", title: "Title Is Custom" },
  { columnDataKey: "ColumnKey4", title: "Custom Title" },
];
```

## Editable Data Grid

Interactive/editable data grids are a highly requested feature in the Webview UI Toolkit.

By default, the toolkit and in particular [FAST](https://www.fast.design/) (the underlying framework that the toolkit uses) **do not** offer any first-party APIs for enabling interactivity or editability in data grids. Additionally, since FAST owns the underlying data grid implementation, first-party support for interactivity will eventually need to come from them.

With that said, workaround solutions are possible and a reference implementation for making the `vscode-data-grid` component editable is [available as a sample extension](https://github.com/microsoft/vscode-webview-ui-toolkit-samples/tree/main/default/editable-data-grid).
