import {createDataGrid, DataGridArgs} from './fixtures/createDataGrid';

export default {
	title: 'Library/Data Grid',
	argTypes: {
		generateHeader: {
			control: {
				type: 'select',
				options: ['None', 'Default', 'Sticky'],
			},
		},
		gridTemplateComlumns: {control: 'text'},
		hasCustomTitles: {control: 'boolean'},
		hasCustomHeaderCell: {control: 'boolean'},
		hasCustomCell: {control: 'boolean'},
		gridData: {control: 'object'},
	},
	parameters: {
		actions: {
			disabled: true,
		},
	},
};

const Template = ({...args}: DataGridArgs) => {
	return createDataGrid({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	generateHeader: 'Default',
	gridTemplateComlumns: '1fr 1fr 1fr 1fr',
	hasCustomTitles: false,
	hasCustomHeaderCell: false,
	hasCustomCell: false,
	gridData: [
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
	],
};
Default.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];`,
		},
	},
};

export const WithNoHeader: any = Template.bind({});
WithNoHeader.args = {
	...Default.args,
	generateHeader: 'None',
};
WithNoHeader.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid" generate-header="none"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];`,
		},
	},
};

export const WithStickyHeader: any = Template.bind({});
WithStickyHeader.args = {
	...Default.args,
	generateHeader: 'Sticky',
	gridData: [
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
		{
			Header1: 'Cell Data',
			Header2: 'Cell Data',
			Header3: 'Cell Data',
			Header4: 'Cell Data',
		},
	],
};
WithStickyHeader.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid" generate-header="sticky"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t// Insert more rows ...\n];`,
		},
	},
};

export const WithCustomColumnWidths: any = Template.bind({});
WithCustomColumnWidths.args = {
	...Default.args,
	gridTemplateComlumns: '100px 10vw 3fr 30%',
};
WithCustomColumnWidths.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid" grid-template-columns="100px 10vw 3fr 30%"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];`,
		},
	},
};

export const WithCustomTitles: any = Template.bind({});
WithCustomTitles.args = {
	...Default.args,
	hasCustomTitles: true,
};
WithCustomTitles.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];\ndocument.getElementById('basic-grid').columnDefinitions = [\n\t{title: 'A Custom Header Title', columnDataKey: 'Header1'},\n\t{title: 'Another Custom Title', columnDataKey: 'Header2'},\n\t{title: 'Title Is Custom', columnDataKey: 'Header3'},\n\t{title: 'Custom Title', columnDataKey: 'Header4'},\n];`,
		},
	},
};

export const WithCustomCell: any = Template.bind({});
WithCustomCell.args = {
	...Default.args,
	hasCustomCell: true,
};
WithCustomCell.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid"></vscode-data-grid>\n\n// TypeScript\n\nimport {html} from '@microsoft/fast-element';\nimport type {DataGridCell} from '@microsoft/fast-foundation';\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];\n\ndocument.getElementById('basic-grid').columnDefinitions = [\n\t{\n\t\tcolumnDataKey: 'Header1',\n\t\tcellTemplate: buttonCellTemplate,\n\t\tcellFocusTargetCallback: getFocusTarget,\n\t},\n\t{\n\t\tcolumnDataKey: 'Header2',\n\t\tcellTemplate: buttonCellTemplate,\n\t\tcellFocusTargetCallback: getFocusTarget,\n\t},\n\t{\n\t\tcolumnDataKey: 'Header3',\n\t\tcellTemplate: buttonCellTemplate,\n\t\tcellFocusTargetCallback: getFocusTarget,\n\t},\n\t{\n\t\tcolumnDataKey: 'Header4',\n\t\tcellTemplate: buttonCellTemplate,\n\t\tcellFocusTargetCallback: getFocusTarget,\n\t},\n];\n\nconst buttonCellTemplate = html<DataGridCell>\`\n\t<template>\n\t\t<vscode-button @click="\${handleClick}" style="width: 100%;">\n\t\t\t\${cell => populateWithCellData(cell)}\n\t\t</vscode-button>\n\t</template>\n\`;\n\nfunction handleClick(): void {\n\talert('Cell Clicked!');\n}\n\nfunction populateWithCellData(cell: DataGridCell) {\n\tif (cell.columnDefinition) {\n\t\tconst columnMetaData = cell.columnDefinition;\n\t\tconst columnKey = columnMetaData.columnDataKey;\n\n\t\tif (cell.cellType === 'columnheader') {\n\t\t\t// If the cell is a header cell, return the cell title or column key\n\t\t\treturn columnMetaData.title ? columnMetaData.title : columnKey;\n\t\t} else {\n\t\t\t// If the cell is a default cell, return the cell data\n\t\t\tif (cell.rowData) {\n\t\t\t\tconst parentRow = cell.rowData;\n\t\t\t\tconst cellData = parentRow[columnKey];\n\t\t\t\treturn cellData;\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction getFocusTarget(cell: DataGridCell): HTMLElement {\n\treturn cell.querySelector('vscode-button');\n}`,
		},
	},
};

export const WithCustomHeaderCell: any = Template.bind({});
WithCustomHeaderCell.args = {
	...Default.args,
	hasCustomHeaderCell: true,
};
WithCustomHeaderCell.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid"></vscode-data-grid>\n\n// TypeScript\n\nimport {html} from '@microsoft/fast-element';\nimport type {DataGridCell} from '@microsoft/fast-foundation';\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];\n\ndocument.getElementById('basic-grid').columnDefinitions = [\n\t{\n\t\tcolumnDataKey: 'Header1',\n\t\theaderCellTemplate: buttonCellTemplate,\n\t\theaderCellFocusTargetCallback: getFocusTarget,\n\t},\n\t{\n\t\tcolumnDataKey: 'Header2',\n\t\theaderCellTemplate: buttonCellTemplate,\n\t\theaderCellFocusTargetCallback: getFocusTarget,\n\t},\n\t{\n\t\tcolumnDataKey: 'Header3',\n\t\theaderCellTemplate: buttonCellTemplate,\n\t\theaderCellFocusTargetCallback: getFocusTarget,\n\t},\n\t{\n\t\tcolumnDataKey: 'Header4',\n\t\theaderCellTemplate: buttonCellTemplate,\n\t\theaderCellFocusTargetCallback: getFocusTarget,\n\t},\n];\n\nconst buttonCellTemplate = html<DataGridCell>\`\n\t<template>\n\t\t<vscode-button @click="\${handleClick}" style="width: 100%;">\n\t\t\t\${cell => populateWithCellData(cell)}\n\t\t</vscode-button>\n\t</template>\n\`;\n\nfunction handleClick(): void {\n\talert('Cell Clicked!');\n}\n\nfunction populateWithCellData(cell: DataGridCell) {\n\tif (cell.columnDefinition) {\n\t\tconst columnMetaData = cell.columnDefinition;\n\t\tconst columnKey = columnMetaData.columnDataKey;\n\n\t\tif (cell.cellType === 'columnheader') {\n\t\t\t// If the cell is a header cell, return the cell title or column key\n\t\t\treturn columnMetaData.title ? columnMetaData.title : columnKey;\n\t\t} else {\n\t\t\t// If the cell is a default cell, return the cell data\n\t\t\tif (cell.rowData) {\n\t\t\t\tconst parentRow = cell.rowData;\n\t\t\t\tconst cellData = parentRow[columnKey];\n\t\t\t\treturn cellData;\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction getFocusTarget(cell: DataGridCell): HTMLElement {\n\treturn cell.querySelector('vscode-button');\n}`,
		},
	},
};
