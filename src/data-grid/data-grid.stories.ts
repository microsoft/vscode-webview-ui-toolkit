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
		isFocused: {control: 'boolean'},
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
			'Name': 'Container 1',
			'Last Edited': '01/15/21',
			'Description': 'This is a really great container',
			'Source': 'Docker',
		},
		{
			'Name': 'Container 2',
			'Last Edited': '03/12/21',
			'Description': 'This is a nice container too',
			'Source': 'Docker',
		},
		{
			'Name': 'Container 3',
			'Last Edited': '05/04/21',
			'Description':
				'This is an incredibly long description that just goes on forever. Wow... still going.',
			'Source': 'Docker',
		},
		{
			'Name': 'Container 4',
			'Last Edited': '06/22/21',
			'Description': 'I use this container for important things',
			'Source': 'Docker',
		},
		{
			'Name': 'Container 5',
			'Last Edited': '08/27/21',
			'Description': 'This is a ridiculously cool container',
			'Source': 'Docker',
		},
	],
	isFocused: false,
};
Default.parameters = {
	docs: {
		source: {
			code: `<vscode-data-grid></vscode-data-grid>`,
		},
	},
};
