import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createDataGrid, DataGridArgs} from './fixtures/createDataGrid';
import {VSCodeDataGrid} from './index';

// Prevent tree-shaking
VSCodeDataGrid;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Data Grid',
	argTypes: {
		gridData: {control: 'object'},
		generateHeader: {
			control: {
				type: 'select',
				options: ['None', 'Default', 'Sticky'],
			},
		},
		gridTemplateComlumns: {control: 'text'},
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
	gridData: [
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
	],
	generateHeader: 'Default',
	gridTemplateComlumns: '1fr 1fr 1fr 1fr',
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-data-grid id="basic-grid"></vscode-data-grid>\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n];`,
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
			code: `<vscode-data-grid id="basic-grid" generate-header="none"></vscode-data-grid>\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n];`,
		},
	},
};

export const WithStickyHeader: any = Template.bind({});
WithStickyHeader.args = {
	...Default.args,
	generateHeader: 'Sticky',
	gridData: [
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
		{
			'Header 1': 'Cell Data',
			'Header 2': 'Cell Data',
			'Header 3': 'Cell Data',
			'Header 4': 'Cell Data',
		},
	],
};
WithStickyHeader.parameters = {
	docs: {
		source: {
			code: `<vscode-data-grid id="basic-grid" generate-header="sticky"></vscode-data-grid>\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n];`,
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
			code: `<vscode-data-grid id="basic-grid" grid-template-columns="100px 10vw 3fr 30%"></vscode-data-grid>\n\ndocument.getElementById('basic-grid').rowsData = [\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n\t{'Header 1': 'Cell Data', 'Header 2': 'Cell Data', 'Header 3': 'Cell Data', 'Header 4': 'Cell Data'},\n];`,
		},
	},
};
