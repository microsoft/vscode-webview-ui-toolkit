import {VSCodeDesignSystemProvider} from '../design-system-provider/index';
import {createDataGrid, DataGridArgs} from './fixtures/createDataGrid';
import {VSCodeDataGrid} from './index';

// Prevent tree-shaking
VSCodeDataGrid;
VSCodeDesignSystemProvider;

export default {
	title: 'Library/Data Grid',
	argTypes: {
		isDisabled: {control: 'boolean'},
		isFocused: {control: 'boolean'},
	},
};

const Template = ({...args}: DataGridArgs) => {
	return createDataGrid({...args});
};

export const Default: any = Template.bind({});
Default.args = {
	isDisabled: false,
	isFocused: false,
};
