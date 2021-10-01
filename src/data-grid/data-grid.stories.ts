// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {createDataGrid, DataGridArgs} from './fixtures/createDataGrid';

export default {
	title: 'Library/Data Grid',
	argTypes: {
		generateHeader: {
			control: {
				type: 'select',
				options: ['Default', 'Sticky'],
			},
		},
		gridTemplateColumns: {control: 'text'},
		hasCustomTitles: {control: 'boolean'},
		gridData: {control: 'object'},
		ariaLabel: {control: 'text'},
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
	gridTemplateColumns: '',
	hasCustomTitles: false,
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
	ariaLabel: 'Default',
};
Default.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid" aria-label="Default"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];`,
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
	ariaLabel: 'Sticky Header',
};
WithStickyHeader.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid" generate-header="sticky" aria-label="Sticky Header"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t// Insert more rows ...\n];`,
		},
	},
};

export const WithCustomColumnWidths: any = Template.bind({});
WithCustomColumnWidths.args = {
	...Default.args,
	gridTemplateColumns: '100px 10vw 3fr 30%',
	ariaLabel: 'Custom Column Widths',
};
WithCustomColumnWidths.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid" grid-template-columns="100px 10vw 3fr 30%" aria-label="Custom Column Widths"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];`,
		},
	},
};

export const WithCustomTitles: any = Template.bind({});
WithCustomTitles.args = {
	...Default.args,
	hasCustomTitles: true,
	ariaLabel: 'Custom Column Titles',
};
WithCustomTitles.parameters = {
	docs: {
		source: {
			code: `<!-- HTML -->\n\n<vscode-data-grid id="basic-grid" aria-label="Custom Column Titles"></vscode-data-grid>\n\n// TypeScript or JavaScript\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n\t{Header1: 'Cell Data', Header2: 'Cell Data', Header3: 'Cell Data', Header4: 'Cell Data'},\n];\ndocument.getElementById('basic-grid').columnDefinitions = [\n\t{title: 'A Custom Header Title', columnDataKey: 'Header1'},\n\t{title: 'Another Custom Title', columnDataKey: 'Header2'},\n\t{title: 'Title Is Custom', columnDataKey: 'Header3'},\n\t{title: 'Custom Title', columnDataKey: 'Header4'},\n];`,
		},
	},
};
